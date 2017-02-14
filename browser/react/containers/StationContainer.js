import {connect} from 'react-redux'
import {toggleSong} from '../action-creators/player.js'
import Station from '../components/Station'

const convertSongs = (songs) => {
  return songs.map(song => {
    song.audioUrl = `/api/songs/${song.id}/audio`;
    return song;
  })
}

export default connect(
  (state) => {
    return {
      songs: convertSongs(state.genre.genreSongs),
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
    }
  },
  (dispatch) => {
    return {
      toggle: (currentSong, currentSongList) => {
        dispatch(toggleSong(currentSong, currentSongList))
      }
    }
  }
)(Station)
