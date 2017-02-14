import {connect} from 'react-redux'
import Stations from '../components/Stations'

// const convertSongsToStations = (songs) => {
//   const stationsObj = {};

//   songs.forEach(song => {
//     stationsObj[song.genre] ? stationsObj[song.genre].push(song) : stationsObj[song.genre] = [song];
//   })

//   return stationsObj;
// }

export default connect(
  (state) => {
    return {
      stations: state.genre.genres
    }
  }
)(Stations)
