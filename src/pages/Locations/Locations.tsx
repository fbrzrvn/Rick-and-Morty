import React from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../../helpers/useApi';

const Locations = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <div>
      {apiData.map((episode: IApiData) => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>{episode.type}</p>
          <p>{episode.dimension}</p>
        </div>
      ))}
    </div>
  );
};

export default Locations;
