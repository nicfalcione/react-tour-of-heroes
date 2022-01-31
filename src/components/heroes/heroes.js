import React from 'react';
import Proptypes from 'prop-types';

import HeroDetails from '../hero-details/hero-details';
import HeroesClass from './heroes.css';

function displayHero(hero) {
  return <HeroDetails key={hero.id} hero={hero} />;
}

export default function Heroes({ heroes }) {
  return (
    <div className={HeroesClass.container}>
      {heroes.map(displayHero)}
    </div>
  );
}

HeroDetails.propTypes = {
  heroes: Proptypes.arrayOf(Proptypes.object)
};