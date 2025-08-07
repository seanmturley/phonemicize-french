import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import db from "./db.ts";
import posTagCombinationDefinitions from "../../lib/pos-tag-combination-definitions.ts";

const startingRow = 3;

const insert = db.prepare(
  `INSERT INTO lexicon (
    word,
    lemma,
    pos_tags
  )
  VALUES (?, ?, ?)`
);

let lastInsertRowid: number | bigint;

createReadStream("./src/lib/test-lexicon.txt")
  .pipe(parse({ delimiter: "\t", from_line: startingRow }))
  .on("data", (row) => {
    ({ lastInsertRowid } = insert.run(
      row[0],
      row[1],
      posTagCombinationDefinitions[row[2]]
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
