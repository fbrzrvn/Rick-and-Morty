import React from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../../helpers/useApi';

const Characters = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <div>
      {apiData.map((episode: IApiData) => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>{episode.status}</p>
          <p>{episode.species}</p>
          <p>{episode.location?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
