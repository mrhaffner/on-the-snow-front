import axios from 'axios';
import { ResortObj } from '../types';
import { slugify, snakify } from '../utilities/slug';

const baseUrl = 'http://127.0.0.1:5000/resorts';

export const getAllResortNames = async () => {
  const response = await axios.get(baseUrl);
  const resortList: ResortObj[] = response.data;
  const resortMap = await resortList.map((x: ResortObj) => x.name).sort();

  return resortMap;
};

export const getStateResortNames = async (name: string) => {
  const response = await axios.get(`${baseUrl}/states/${snakify(name)}`);
  const resortList: ResortObj[] = response.data;
  const resortMap = await resortList.map((x: ResortObj) => x.name).sort();

  return resortMap;
};

export const getStateNames = async () => {
  const response = await axios.get(`${baseUrl}/states`);
  const stateList: string[] = response.data;
  return stateList;
};
