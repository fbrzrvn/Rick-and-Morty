import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchAll, fetchApi } from '../../api';
import getEndpoint from '../../helpers/getEndPoint';
import Spinner from '../Spinner';
import {
  CardBtn,
  CardDetails,
  CardH2,
  CardHeader,
  CardP,
  CardWrap,
  Wrapper,
  WrapperCard,
  WrapperImg,
  WrapperLink,
} from './styles';

const Location = () => {
  const location = useLocation();
  const history = useHistory();
  const endPoint: string = location.pathname;
  const [data, setData] = useState<any>([]);
  const [residents, setResidents] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApi(endPoint).then((response: ApiDataType | any) => {
      setData(response.data);
      fetchAll(response.data?.residents).then((response: ApiDataType | any) => {
        setResidents(response);
        setIsLoading(false);
      });
    });
  }, [endPoint]);

  return isLoading ? (
    <Spinner />
  ) : (
    <CardWrap>
      <CardHeader>
        <CardH2>{data.name}</CardH2>
        <CardDetails>
          <CardP>{data.dimension}</CardP>
          <CardP>|</CardP>
          <CardP>{data.type}</CardP>
        </CardDetails>
      </CardHeader>
      <CardH2>Residents:</CardH2>
      <Wrapper>
        {residents.map((resident: any) => (
          <WrapperCard key={resident.data.id}>
            <WrapperImg src={resident.data.image} alt={resident.data.name} />
            <WrapperLink to={`/${getEndpoint(resident.data.url)}`}>
              {resident.data.name}
            </WrapperLink>
          </WrapperCard>
        ))}
      </Wrapper>
      <CardBtn onClick={() => history.goBack()}>Go Back</CardBtn>
    </CardWrap>
  );
};

export default Location;
