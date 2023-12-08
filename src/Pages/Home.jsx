import React from 'react';
import Hero from '../Compoents/Hero/Hero';

const Home = ({ addToCart }) => {
  return (
    <div>
      <Hero addToCart={addToCart} />
    </div>

  );
};

export default Home;