export const makeSlug = (word: string) => {
  return word
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
