import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchAll, fetchApi } from '../../api';
import getEndPoint from '../../helpers/getEndPoint';
import Spinner from '../Spinner';
import {
  CardBody,
  CardBtn,
  CardDetails,
  CardH2,
  CardHeader,
  CardImg,
  CardP,
  CardWrap,
  CharStatus,
  Wrapper,
  WrapperLink,
} from './styles';

const Character = () => {
  const location = useLocation();
  const history = useHistory();
  const endPoint: string = location.pathname;
  const [data, setData] = useState<any>([]);
  const [episodes, setEpisodes] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApi(endPoint).then((response: ApiDataType | any) => {
      setData(response.data);
      fetchAll(response.data?.episode).then((response: ApiDataType | any) => {
        setEpisodes(response);
        setIsLoading(false);
      });
    });
  }, [endPoint]);

  const goToLocation = () => {
    const endPoint = getEndPoint(data.location?.url);
    history.push(`/${endPoint}`);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <CardWrap>
      <CardHeader>
        <CardImg src={data.image} alt={data.name} />
        <CardBody>
          <CardH2>{data.name}</CardH2>
          <CardDetails>
            <CardP>{data.species}</CardP>
            <CardP>|</CardP>
            <CardP>{data.gender}</CardP>
            <CardP>|</CardP>
            <CardP>{data.status}</CardP>
            <CharStatus alive={data.status} />
          </CardDetails>
          <CardP>{data.location?.name}</CardP>
          <CardBtn onClick={goToLocation}>View Location</CardBtn>
        </CardBody>
      </CardHeader>
      <CardH2>Episodes:</CardH2>
      <Wrapper>
        {episodes.map((episode: any) => (
          <div key={episode.data.id}>
            <WrapperLink to={`/${getEndPoint(episode.data.url)}`}>
              {episode.data.name}
            </WrapperLink>
          </div>
        ))}
      </Wrapper>
      <CardBtn right onClick={() => history.goBack()}>
        Go Back
      </CardBtn>
    </CardWrap>
  );
};

export default Character;
