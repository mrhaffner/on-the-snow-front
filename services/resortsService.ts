import axios from 'axios';
import { ResortObj } from '../types';

const baseUrl = 'http://127.0.0.1:5000/resorts';

export const getAllResortNames = async () => {
  const response = await axios.get(baseUrl);
  const resortList: ResortObj[] = response.data;
  const resortMap = await resortList.map((x: ResortObj) => x.name).sort();

  return resortMap;
};
