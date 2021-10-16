import { ResortNameObj } from '../types';

export const getFirstHalf = <X>(array: X[]) => {
  return array.slice(0, array.length / 2);
};

export const getSecondHalf = <X>(array: X[]) => {
  return array.slice(array.length / 2, array.length);
};

export const filterStringArr = (word: string, array: string[]) => {
  const result = array.filter((x: string) =>
    x.toLowerCase().startsWith(word.toLowerCase()),
  );
  return result.slice(0, 10);
};

export const filterObjArr = (word: string, array: ResortNameObj[]) => {
  const result = array.filter((x: ResortNameObj) =>
    x.name.toLowerCase().startsWith(word.toLowerCase()),
  );
  return result.slice(0, 10);
};
