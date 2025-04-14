export const frontVowel = "eéèêiïy";

export const backVowel = "aàâoôu";

export const vowel = frontVowel + backVowel;

export const consonantExcludingMNH = "bdfgjklpqrstvwxz";

export const consonantExcludingMN = "bdfgjklpqrstvwxz" + "h";

export const consonantExcludingH = consonantExcludingMNH + "mn";

export const consonant = consonantExcludingH + "h";

export const silentFinalConsonantExcludingST = "bdgpz";

export const silentFinalConsonant = silentFinalConsonantExcludingST + "st";
