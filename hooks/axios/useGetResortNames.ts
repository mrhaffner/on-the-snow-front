import { useEffect, useState } from 'react';
import { getAllResortNames } from '../../services/resortsService';

const useGetResortNames = () => {
  const [resorts, setResorts] = useState<string[] | null>(null);

  useEffect(() => {
    const getResorts = async () => {
      try {
        const response = await getAllResortNames();
        setResorts(response);
      } catch (e) {
        console.log(e);
      }
    };
    getResorts();
  }, []);

  return [resorts];
};

export default useGetResortNames;
