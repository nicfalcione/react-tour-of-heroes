import React from 'react';
import { connect } from 'react-redux';
import HeroesContainer from '../containers/heroes-container';
import Input from '../input/input';

function AllHeroes() {
    return (
      <div>
        <Input />
        <HeroesContainer />
      </div>
    );
}

export default connect()(AllHeroes);