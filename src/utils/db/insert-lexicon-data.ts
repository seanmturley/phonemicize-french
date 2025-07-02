import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import db from "./db.ts";

createReadStream("./src/lib/test-lexicon.txt")
  .pipe(parse({ delimiter: "\t", from_line: 3 }))
  .on("data", (row) => {
    const insert = db.prepare(
      "INSERT INTO lexicon (word, lemma, pos_tags) VALUES (?, ?, ?)"
    );

    const { lastInsertRowid } = insert.run(...row);
    console.log(`Inserted a row with ID: ${lastInsertRowid}`);
  })
  .on("end", () => console.log("Finished reading lexicon from file."))
  .on("error", (error) => console.log(error.message));
