import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchAll, fetchApi } from '../../api';
import {
  CardBody,
  CardDetails,
  CardH2,
  CardHeader,
  CardImg,
  CardP,
  CardWrap,
  GoBackBtn,
  StatusAlive,
  StatusDead,
  Wrapper,
  WrapperH5,
} from './styles';

const Character = () => {
  const location = useLocation();
  const history = useHistory();
  const endPoint: string = location.pathname;
  const [data, setData] = useState<any>([]);
  const [char, setChar] = useState<any>([]);

  useEffect(() => {
    fetchApi(endPoint).then((response: ApiDataType | any) => {
      setData(response.data);
      fetchAll(response.data?.episode).then((response: ApiDataType | any) =>
        setChar(response)
      );
    });
  }, [endPoint]);

  return (
    <>
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
              {data.status === 'Alive' ? <StatusAlive /> : <StatusDead />}
            </CardDetails>
            <CardP>{data.location?.name}</CardP>
          </CardBody>
        </CardHeader>
        <CardH2>Episodes:</CardH2>
        <Wrapper>
          {char.map((el: any) => (
            <div key={el.data.id}>
              <WrapperH5>{el.data.name}</WrapperH5>
            </div>
          ))}
        </Wrapper>
        <GoBackBtn onClick={() => history.goBack()}>Go Back</GoBackBtn>
      </CardWrap>
    </>
  );
};

export default Character;
