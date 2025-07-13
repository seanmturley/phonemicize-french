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
    const id = untransliteratedRow.id;
    const word = untransliteratedRow.word;
    const pos = untransliteratedRow.primary_pos_tag;

    if (typeof word !== "string" || typeof pos !== "string") {
      throw new TypeError(
        `Can only transliterate strings. Check data for the lexicon entry with ID: ${id}.`
      );
    }

    const transliteration = transliterateLexicalUnit(word, pos);

    updateTransliteration.run(transliteration, id);

    lastTransliteratedRowId = id;
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
