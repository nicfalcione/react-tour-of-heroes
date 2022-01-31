import React from 'react';
import Proptypes from 'prop-types';
import HeroClass from './hero-details.css';

export default function HeroDetails({ hero }) {
  return (
    <div key={hero.id} className={HeroClass.heroesli}>
      <span className={HeroClass.badge}>{hero.id}</span>
      <span>{hero.name}</span>
    </div>
  );
}

HeroDetails.propTypes = {
  hero: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
  }).isRequired
};