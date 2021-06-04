import axios, { AxiosResponse } from 'axios';

export const fetchApi = async (
  params: string
): Promise<AxiosResponse<ApiDataType>> => {
  const baseUrl: string = 'https://rickandmortyapi.com/api/';
  try {
    const response: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + params
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAll = async (
  array: string[]
): Promise<AxiosResponse<any>> => {
  const response: any = await axios.all(
    array.map((url: string) => axios.get(url))
  );
  return response;
};
