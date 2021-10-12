export const getFirstHalf = <x>(array: x[]) => {
  return array.slice(0, array.length / 2);
};

export const getSecondHalf = <x>(array: x[]) => {
  return array.slice(array.length / 2, array.length);
};
