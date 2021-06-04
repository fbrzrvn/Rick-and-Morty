interface IApiData {
  id: number;
  name: string;
  url: string;

  air_date?: string;
  characters?: string[];

  type?: string;
  status?: string;
  species?: string;
  gender?: string;
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];

  dimension?: string;
  residents?: string[];

  prevPage: string;
  nextPage: string;
  setEndPoint: string;
}

type ApiDataType = {
  message: string;
  status: string;
  data: IApiData;
};
