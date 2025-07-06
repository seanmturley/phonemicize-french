import { DatabaseSync } from "node:sqlite";

function connectToDatabase() {
  const db = new DatabaseSync("./src/lib/lexicon.db");

  db.exec(`
  CREATE TABLE IF NOT EXISTS lexicon
  (
    id                        INTEGER   PRIMARY KEY,
    word                      TEXT      NOT NULL,
    lemma                     TEXT      NOT NULL,
    primary_pos_tag           TEXT      NOT NULL,
    secondary_pos_tags        TEXT      NOT NULL,
    phonemic_transliteration  TEXT
  )
`);

  return db;
}

export default connectToDatabase();
