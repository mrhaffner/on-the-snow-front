import axios from 'axios';
import { snakify } from '../utilities/slug';

const baseUrl = 'http://127.0.0.1:5000/resorts';

export const getAllResortNames = async () => {
  const response = await axios.get(baseUrl);
  const resortList: string[] = response.data;
  return resortList;
};

export const getStateResortNames = async (name: string) => {
  const response = await axios.get(`${baseUrl}/states/${snakify(name)}`);
  const resortList: string[] = response.data;
  return resortList;
};

export const getStateNames = async () => {
  const response = await axios.get(`${baseUrl}/states`);
  const stateList: string[] = response.data;
  return stateList;
};
