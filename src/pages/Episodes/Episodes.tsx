import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import useApi from '../../helpers/useApi';
import Routes from '../../routes';
import { Card, CardLink, CardSmall, Container, Wrapper } from '../../styles';

const Episodes = () => {
  const location = useLocation();
  const [isLoading, info, apiData, setEndPoint] = useApi(location);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container>
      <Wrapper>
        {apiData.map((episode: IApiData) => (
          <Card key={episode.id}>
            <CardLink to={`${Routes.EPISODES}/${episode.id}`}>
              {episode.name}
            </CardLink>
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
