import { useCallback, useEffect, useState } from 'react';
import { searchVideos } from '../services/search_svc';



export const useSearchVideos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetch = useCallback((query) => {
    setIsLoading(true);
    searchVideos(query).then(res => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    fetch,
    data
  };
};