export const slugify = (word: string) => {
  return word
    .toLowerCase()
    .replace(/[ _]/g, '-')
    .replace(/[^\w-]+/g, '');
}; // does this handle ' - ' and ' & ' ?

export const unslugify = (slug: string) => {
  const result = slug.replace(/\-/g, ' ');
  return result.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// export const snakify = (word: string) => {
//   return word
//     .toLowerCase()
//     .replace(/[- ]/g, '_')
//     .replace(/[^\w-]+/g, '');
// };
