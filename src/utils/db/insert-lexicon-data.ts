import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import db from "./db.ts";
import formatPosTags from "../format-pos-tags.ts";

const startingRow = 3;

const insert = db.prepare(
  `INSERT INTO lexicon (
    word,
    lemma,
    primary_pos_tag,
    secondary_pos_tags
  )
  VALUES (?, ?, ?, ?)`
);

let lastInsertRowid: number | bigint;

createReadStream("./src/lib/test-lexicon.txt")
  .pipe(parse({ delimiter: "\t", from_line: startingRow }))
  .on("data", (row) => {
    const [primaryPosTag, secondaryPosTags] = formatPosTags(row[2], row[1]);

    ({ lastInsertRowid } = insert.run(
      row[0],
      row[1],
      primaryPosTag,
      secondaryPosTags
    ));
  })
  .on("end", () =>
    console.log(
      `Finished reading lexicon from file. Last row inserted into the database had ID: ${lastInsertRowid}.`
    )
  )
  .on("error", (error) => {
    console.log(error.message);
    console.log(
      `Last row sucessfully inserted into the database had ID: ${lastInsertRowid}`
    );
  });
