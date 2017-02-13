import {connect} from 'react-redux'
import {toggleSong} from '../action-creators/player.js'
import Station from '../components/Station'

const getSongs = (songs, genre) => {
  return songs.filter(song => {
    song.audioUrl = `/api/songs/${song.id}/audio`;
    return song.genre === genre
  })
}

export default connect(
  (state, ownProps) => {
    return {
      songs: getSongs(state.playlists.songs, ownProps.params.genre),
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
