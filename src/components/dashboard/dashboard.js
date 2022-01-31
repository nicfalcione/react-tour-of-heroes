import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import BestHeroesContainer from '../containers/best-heroes-container';
import { updateHeroesAction } from '../../services/hero-service';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(updateHeroesAction(this.props.heroes));
  }
  render() {
    return (
      <div>
        <BestHeroesContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);