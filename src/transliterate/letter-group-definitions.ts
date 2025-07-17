export const frontVowel = "eéèêiïy";

export const backVowel = "aàâoôu";

export const vowel = frontVowel + backVowel;

export const vowelOrSemivowelPhoneme = "ijyɥuweøəoɛœɔaɛ̃œ̃ɔ̃ɑ̃";
// Note the list excludes /ɛː/, which is comprised of two characters.
// For the purposes of regex tests, this is already represented by /ɛ/

export const consonantExcludingMNH = "bcçdfgjklpqrstvwxz";

export const consonantExcludingMN = consonantExcludingMNH + "h";

export const consonantExcludingH = consonantExcludingMNH + "mn";

export const consonant = consonantExcludingH + "h";

export const consonantPhoneme = "mnɲŋptkbdɡfsʃvzʒʁljɥw";
// Note this excludes the letter "h" by definition, since it is
// never pronounced.

export const silentFinalConsonantExcludingST = "bdgpz";

export const silentFinalConsonant = silentFinalConsonantExcludingST + "st";
