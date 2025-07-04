import db from "./db.ts";

export default function queryWord(word: string) {
  const query = db.prepare(`
    SELECT *
    FROM lexicon
    WHERE word = ?
    `);

  return query.all(word);
}
