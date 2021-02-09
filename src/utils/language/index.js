import english from "~/utils/language/english.json";
import spanish from "~/utils/language/spanish.json";

const allTranslation = {
  english,
  spanish,
};

export const translationText = (language) => allTranslation[language];
