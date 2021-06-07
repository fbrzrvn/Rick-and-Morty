import React from 'react';
import Loader from '../../assets/portal.png';
import { Container, SpinnerImage } from './styles';

const Spinner = () => {
  return (
    <Container>
      <SpinnerImage src={Loader} alt="spinner-loader" />
    </Container>
  );
};

export default Spinner;
