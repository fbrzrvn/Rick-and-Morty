import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useApi from '../../helpers/useApi';
import Routes from '../../routes';
import { Card, CardLink, CardSmall, Container, Wrapper } from '../../styles';

const Locations = () => {
  const location = useLocation();
  const [info, apiData, setEndPoint] = useApi(location);

  return (
    <Container>
      <Wrapper>
        {apiData.map((location: IApiData) => (
          <Card key={location.id}>
            <CardLink to={`${Routes.LOCATIONS}/${location.id}`}>
              {location.name}
            </CardLink>
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
