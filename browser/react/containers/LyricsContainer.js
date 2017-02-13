import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lyrics from '../components/Lyrics';
import {searchLyrics} from '../action-creators/lyrics';

export default connect(
  (state, ownProps)=>{
    return Object.assign({}, state.lyrics);
  },
  dispatch=>{
    return {
      submit: function(artistQuery, songQuery){
        dispatch(searchLyrics(artistQuery, songQuery));
      }
    };
  }
)(class extends Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, value) {
    const stateChange = {};
    stateChange[`${type}Query`] = value;
    this.setState(stateChange);
  }

  handleSubmit(e) {
    console.log("props in lyricscontainer", this.props);
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.submit(this.state.artistQuery, this.state.songQuery);
    }

  }

  render() {
    return (
      <Lyrics
        {...this.props}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
    );
  }

});
