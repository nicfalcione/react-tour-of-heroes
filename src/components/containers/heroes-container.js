import { connect } from 'react-redux';
import Heroes from '../heroes/heroes';

function mapStateToProps(currentState) {
  return {
    heroes: currentState.heroes,
  };
}

export default connect(mapStateToProps)(Heroes);