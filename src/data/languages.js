export const languages = ["az", "en", "ru"];

export function getNextLanguage(current) {
  const index = languages.indexOf(current);
  return languages[(index + 1) % languages.length];
}
