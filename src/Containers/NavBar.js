import { connect } from 'react-redux';
import NavBar from '../Components/NavBar';

import { actionslogOut } from '../actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionslogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
