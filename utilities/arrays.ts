export const getFirstHalf = <X>(array: X[]) => {
  return array.slice(0, array.length / 2);
};

export const getSecondHalf = <X>(array: X[]) => {
  return array.slice(array.length / 2, array.length);
};
