import React from 'react';
import HomeGif from '../../assets/home-gif.gif';
import { HomeImg, HomeWrapper } from './styles';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeImg src={HomeGif} alt="gif" />
    </HomeWrapper>
  );
};

export default Home;
