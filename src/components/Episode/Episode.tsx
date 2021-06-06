import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAll, fetchApi } from '../../api';

const Episode = () => {
  const location = useLocation();
  const endPoint: string = location.pathname;
  const [data, setData] = useState<any>([]);
  const [char, setChar] = useState<any>([]);

  useEffect(() => {
    fetchApi(endPoint).then((response: ApiDataType | any) => {
      setData(response.data);
      fetchAll(response.data?.characters).then((response: ApiDataType | any) =>
        setChar(response)
      );
    });
  }, [endPoint]);

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.air_date}</p>
      <p>{data.episode}</p>
      {char.map((el: any) => (
        <div key={el.data.id} className="card">
          <p>{el.data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Episode;
