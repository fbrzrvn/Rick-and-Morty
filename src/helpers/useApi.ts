import { useEffect, useState } from 'react';
import { fetchApi } from '../api';

const useApi = (location: { pathname: string }) => {
  const [endPoint, setEndPoint] = useState<string>(location.pathname);
  const [apiData, setApiData] = useState<any>([]);
  const [info, setInfo] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApi(endPoint).then((response: IApiData[] | any) => {
      setInfo(response.data.info);
      setApiData(response.data.results);
      setIsLoading(false);
    });
  }, [endPoint]);

  return [isLoading, info, apiData, setEndPoint];
};

export default useApi;
