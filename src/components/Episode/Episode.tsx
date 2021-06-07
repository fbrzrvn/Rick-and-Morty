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

const Episode = () => {
  const location = useLocation();
  const history = useHistory();
  const endPoint: string = location.pathname;
  const [data, setData] = useState<any>([]);
  const [characters, setCharacters] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApi(endPoint).then((response: ApiDataType | any) => {
      setData(response.data);
      fetchAll(response.data?.characters).then(
        (response: ApiDataType | any) => {
          setCharacters(response);
          setIsLoading(false);
        }
      );
    });
  }, [endPoint]);

  return isLoading ? (
    <Spinner />
  ) : (
    <CardWrap>
      <CardHeader>
        <CardH2>{data.name}</CardH2>
        <CardDetails>
          <CardP>{data.air_date}</CardP>
          <CardP>|</CardP>
          <CardP>{data.episode}</CardP>
        </CardDetails>
      </CardHeader>
      <CardH2>Episodes:</CardH2>
      <Wrapper>
        {characters.map((character: any) => (
          <WrapperCard key={character.data.id}>
            <WrapperImg src={character.data.image} alt={character.data.name} />
            <WrapperLink to={`/${getEndpoint(character.data.url)}`}>
              {character.data.name}
            </WrapperLink>
          </WrapperCard>
        ))}
      </Wrapper>
      <CardBtn onClick={() => history.goBack()}>Go Back</CardBtn>
    </CardWrap>
  );
};

export default Episode;
