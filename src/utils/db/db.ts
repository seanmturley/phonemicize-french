import { DatabaseSync } from "node:sqlite";

function connectToDatabase() {
  const db = new DatabaseSync("./src/lib/lexicon.db");

  db.exec(`
  CREATE TABLE IF NOT EXISTS lexicon
  (
    id        INTEGER   PRIMARY KEY   AUTOINCREMENT,
    word      TEXT      NOT NULL,
    lemma     TEXT      NOT NULL,
    pos_tags  TEXT      NOT NULL
  )
`);

  return db;
}

export default connectToDatabase();
