import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useApi from '../../helpers/useApi';
import { Card, CardH2, CardSmall, Container, Wrapper } from '../../styles';

const Locations = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <Container>
      <Wrapper>
        {apiData.map((location: IApiData) => (
          <Card key={location.id}>
            <CardH2>{location.name}</CardH2>
            <CardSmall>{location.type}</CardSmall>
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

export default Locations;
