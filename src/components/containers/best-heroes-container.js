import { connect } from 'react-redux';
import BestHeroes from '../best-heroes/best-heroes';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}

export default connect(mapStateToProps)(BestHeroes);