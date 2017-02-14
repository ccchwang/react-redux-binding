import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';

export default connect(
  state => {
    return {
      playlists: state.playlists.list
    };
  }
)(Sidebar);
