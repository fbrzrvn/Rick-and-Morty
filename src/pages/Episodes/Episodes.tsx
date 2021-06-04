import React from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../../helpers/useApi';

const Episodes = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <div>
      {apiData.map((episode: IApiData) => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <small>{episode.air_date}</small>
          <p>{episode.episode}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
