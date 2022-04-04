import React from 'react';
import { useHistory } from 'react-router';


import './styles/Hero.css';

const Hero = ({ title }) => {

  let history = useHistory();

  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>

          <button 
            className="button-primary"
            onClick={()=>history.push('/products')}
          >
            Comprar
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
