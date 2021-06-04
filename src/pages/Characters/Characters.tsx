import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useApi from '../../helpers/useApi';
import { Card, CardH2, CardImg, Container, Wrapper } from '../../styles';

const Characters = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <Container>
      <Wrapper>
        {apiData.map((character: IApiData) => (
          <Card key={character.id}>
            <CardImg src={character.image} alt={character.name} />
            <CardH2>{character.name}</CardH2>
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

export default Characters;
