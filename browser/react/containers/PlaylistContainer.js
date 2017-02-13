import React, {Component} from 'react';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

export default connect(
  state=>{
    return Object.assign({}, state.player, {
      selectedPlaylist: state.playlists.selected
    });
  },
  dispatch=>{
    return {
      toggleOne: function(song, list){
        dispatch(toggleSong(song,list));
      }
    };
  }
)(Playlist);
