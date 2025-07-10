import db from "./db.ts";

export default function queryWord(word: string) {
  try {
    const query = db.prepare(`
      SELECT *
      FROM lexicon
      WHERE word = ?
      `);

    return query.all(word);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
  } finally {
    db.close();
  }
}
