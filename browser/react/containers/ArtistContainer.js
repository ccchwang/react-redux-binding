import {connect} from 'react-redux';
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';

export default connect(
  (state, ownProps) => {
    return Object.assign({}, state.player, {
      selectedArtist: state.artists.selected,
      children: ownProps.children.props.children
    });
  },
  dispatch => {
    return {
      toggleOne: function(song, list){
        dispatch(toggleSong(song, list));
      }
    };
  }
)(Artist);
