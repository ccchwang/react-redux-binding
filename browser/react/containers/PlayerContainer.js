import React, {Component} from 'react';
import {connect} from 'react-redux';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import AUDIO from '../audio';
import Player from '../components/Player';

export default connect(
  state=>{
    return Object.assign({}, state.player);
  },
  dispatch=>{
    return{
      next: function(){
        dispatch(next());
      },
      prev: function(){
        dispatch(previous());
      },
      toggle:function(currentSong, currentSongList){
        dispatch(toggleSong(currentSong, currentSongList));
      },
      updateProgress: function(time, duration){
        dispatch(setProgress(time / duration));
      }
    }
  }
)(class extends Component {

  // constructor() {
  //   super();
  // }

  componentDidMount() {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.updateProgress(AUDIO.currentTime,AUDIO.duration);
    });
  }

  render() {
    console.log("playercontainer state", this.props);
    return <Player
      {...this.props}
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.props.toggle}
    />;
  }

});
