import { parse } from "csv-parse";
import * as fs from "node:fs";

fs.createReadStream("./src/lib/test-lexicon.txt")
  .pipe(parse({ delimiter: "\t", from_line: 3 }))
  .on("data", (row) => console.log(row))
  .on("end", () => console.log("Finished reading lexicon from file."))
  .on("error", (error) => console.log(error.message));
