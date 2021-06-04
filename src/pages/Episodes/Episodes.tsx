import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useApi from '../../helpers/useApi';
import { Card, CardH2, CardSmall, Container, Wrapper } from '../../styles';

const Episodes = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <Container>
      <Wrapper>
        {apiData.map((episode: IApiData) => (
          <Card key={episode.id}>
            <CardH2>{episode.name}</CardH2>
            <CardSmall>{episode.air_date}</CardSmall>
          </Card>
        ))}
      </Wrapper>
      <Pagination
        prevPage={info.prev}
        nextPage={info.next}
        setEndPoint={setEndPoint}
      />
    </Container>
  );
};

export default Episodes;
