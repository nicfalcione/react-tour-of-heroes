import React from 'react';
import Proptypes from 'prop-types';

import Hero from '../hero/hero';
import BestHeroesClass from './best-heroes.css';

function displayHero(hero) {
  return <Hero key={hero.id} hero={hero} />;
}

function BestHeroes({ heroes }) {
  const bestHeroes = [];
  let id = 0;

  for (let i = 0; i < 3; i++) {
    bestHeroes.push(heroes[i]);
    id += heroes[i].id;
  }

  return (
    <div key={id}>
      <h3 className={BestHeroesClass.h3}>Best Of Heroes</h3>
      <div className={BestHeroesClass.container}>
        {bestHeroes.map(displayHero)}
      </div>
    </div>
  );
}

export default BestHeroes;

BestHeroes.propTypes = {
  heroes: Proptypes.arrayOf(Proptypes.object).isRequired
};