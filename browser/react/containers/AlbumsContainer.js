import {connect} from 'react-redux';
import Albums from '../components/Albums';

export default connect(
  state => {
    return {
      albums: state.albums.list
    };
  }
)(Albums);
