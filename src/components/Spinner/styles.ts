import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const SpinnerImage = styled('img')`
  width: 200px;
  height: 200px;
  animation: ${rotate} 4s linear infinite;
`;
