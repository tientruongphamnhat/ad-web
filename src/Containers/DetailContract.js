import { connect } from 'react-redux';
import DetailContract from '../Components/DetailContract';
import { updateContract } from '../actions';

const mapDispatchToProps = dispatch => ({
  updateContract: (token, idContract, contract) =>
    dispatch(updateContract(token, idContract, contract))
});

export default connect(null, mapDispatchToProps)(DetailContract);
