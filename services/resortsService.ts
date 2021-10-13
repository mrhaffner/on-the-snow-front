import axios from 'axios';
import { ResortInfo, ResortNameObj } from '../types';
import { slugify } from '../utilities/slug';

const baseUrl = 'http://127.0.0.1:5000/resorts';

export const getAllResortNames = async () => {
  const response = await axios.get(baseUrl);
  const resortList: ResortNameObj[] = response.data;
  return resortList;
};

export const getStateResortNames = async (name: string) => {
  const response = await axios.get(`${baseUrl}/states/${slugify(name)}`);
  const resortList: ResortNameObj[] = response.data;
  return resortList;
};

export const getStateNames = async () => {
  const response = await axios.get(`${baseUrl}/states`);
  const stateList: string[] = response.data;
  return stateList;
};

export const getResort = async (slug: string) => {
  const response = await axios.get(`${baseUrl}/${slug}`);
  const resortInfo: ResortInfo = response.data;
  return resortInfo;
};
