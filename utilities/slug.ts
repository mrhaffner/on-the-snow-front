export const slugify = (word: string) => {
  return word
    .toLowerCase()
    .replace(/[ _]/g, '-')
    .replace(/[^\w-]+/g, '');
}; // does this handle ' - ' and ' & ' ?

// export const unSlugify = (word: string) => {
//     return word
//       .toLowerCase()
//       .replace(/ /g, '-')
//       .replace(/[^\w-]+/g, '');
// }

// export const snakify = (word: string) => {
//   return word
//     .toLowerCase()
//     .replace(/[- ]/g, '_')
//     .replace(/[^\w-]+/g, '');
// };
