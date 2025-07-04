import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import db from "./db.ts";
import formatPosTags from "../format-pos-tags.ts";

createReadStream("./src/lib/test-lexicon.txt")
  .pipe(parse({ delimiter: "\t", from_line: 3 }))
  .on("data", (row) => {
    const insert = db.prepare(
      `INSERT INTO lexicon (
        word,
        lemma,
        primary_pos_tag,
        secondary_pos_tags
      )
      VALUES (?, ?, ?, ?)`
    );

    const [primaryPosTag, secondaryPosTags] = formatPosTags(row[2], row[1]);

    const { lastInsertRowid } = insert.run(
      row[0],
      row[1],
      primaryPosTag,
      secondaryPosTags
    );

    console.log(`Inserted a row with ID: ${lastInsertRowid}`);
  })
  .on("end", () => console.log("Finished reading lexicon from file."))
  .on("error", (error) => console.log(error.message));
