import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type BtnProps = {
  right?: boolean;
};

type StatusProps = {
  alive: string;
};

export const CardWrap = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 32px auto;
  @media screen and (max-width: 1100px) {
    max-width: 90%;
  }
`;

export const CardHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-bottom: 24px;
  border-bottom: 2px solid gray;
`;

export const CardImg = styled('img')`
  width: 250px;
  border: 2px solid black;
  border-radius: 60% 40% 40% 20% / 70% 50% 30% 25%;
  box-shadow: 1px 1px 1px black;
  margin-right: 24px;
`;

export const CardBody = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardH2 = styled('h2')`
  font-family: 'Creepster', cursive;
  color: #2f4368;
  font-size: 32px;
  text-decoration: none;
  margin-bottom: 8px;
`;

export const CardDetails = styled('div')`
  display: flex;
  align-items: center;
`;

export const CardP = styled('p')`
  margin: 8px;
`;

export const CharStatus = styled.div<StatusProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${({ alive }) => (alive === 'Alive' ? '#4caf50' : '#f44336')};
`;

export const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  gap: 16px;
  margin: 24px;
`;

export const WrapperLink = styled(Link)`
  font-family: 'Creepster', cursive;
  color: #faf76b;
  font-size: 18px;
  text-shadow: 1px 0 3px #2f4368;
  text-decoration: none;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-shadow: 2px 0 4px #2f4368;
    transition: all 200ms ease-in-out;
  }
`;

export const CardBtn = styled.button<BtnProps>`
  background-color: #fff;
  border: 2px solid #2f4368;
  border-radius: 85% 15% 84% 16% / 10% 79% 21% 90%;
  padding: 0.75em;
  margin: ${({ right }) => (right ? '0 0 0 auto' : '8px')};
  width: 200px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea;
    transition: background 200ms ease-in-out;
  }
`;
