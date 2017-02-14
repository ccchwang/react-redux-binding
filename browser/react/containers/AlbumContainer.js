import {connect} from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

export default connect(
  state => {
    return {
      selectedAlbum: state.albums.selected,
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
    };
  },
  dispatch => {
    return {
      toggleOne: function(song, list){
        dispatch(toggleSong(song, list));
      }
    };
  }
)(Album);
