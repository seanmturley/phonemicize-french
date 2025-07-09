import db from "./db.ts";
import transliterateLexicalUnit from "../../transliterate/lexical-unit.ts";

const getRowsWithoutTransliteration = db.prepare(`
    SELECT *
    FROM lexicon
    WHERE phonemic_transliteration IS NULL
    `);

const updateTransliteration = db.prepare(`
  UPDATE lexicon
  SET phonemic_transliteration = ?
  WHERE id = ?
  `);

let lastTransliteratedRowId;

try {
  const untransliteratedRows = getRowsWithoutTransliteration.iterate();

  for (const untransliteratedRow of untransliteratedRows) {
    const word = untransliteratedRow.word;

    if (typeof word === "string") {
      const transliteration = transliterateLexicalUnit(word);

      updateTransliteration.run(transliteration, untransliteratedRow.id);

      lastTransliteratedRowId = untransliteratedRow.id;
    }
  }
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  } else {
    console.error("Error:", error);
  }
} finally {
  db.close();
  console.log(
    `Last entry sucessfully transliterated had ID: ${lastTransliteratedRowId}`
  );
}
