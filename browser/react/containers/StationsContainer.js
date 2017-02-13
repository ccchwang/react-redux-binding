import {connect} from 'react-redux'
import Stations from '../components/Stations'

const convertSongsToStations = (songs) => {
  const stationsObj = {};

  songs.forEach(song => {
    if (!stationsObj[song.genre]) stationsObj[song.genre] = [];
    stationsObj[song.genre].push(song);
  })

  return stationsObj;
}

export default connect(
  (state) => {
    return {
      stations: convertSongsToStations(state.playlists.songs)
    }
  }
)(Stations)
