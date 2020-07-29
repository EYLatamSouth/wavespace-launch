import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { puffIn } from 'react-magic';

import "./style.scss";

const animated = StyleSheet.create({
  magic: {
    animationName: puffIn,
    animationDuration: '2s'
  }
});

class Video extends Component {
  constructor(props) {
    super(props);
    this.init();
    this.state = { ended: false };
    this.video = this.props.videoId || 'eYmfTl9E6wU' || '1-JdqHxqkHA';
    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.reframed = false;
      this.player = new window['YT'].Player(props.containerId || 'player', {
        height: '100%',
        width: '100%',
        videoId: this.video,
        playerVars: {
          autoplay: 1,
          color: 'white',
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          origin: 'http://wavespacelaunch.azurewebsites.net/',
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onPlaybackQualityChange': this.onPlaybackQualityChange.bind(this)
        }
      });
    }
  }
  onPlayerReady(event) {
    event.target.setPlaybackQuality('highres');
    event.target.setVolume(100);
    event.target.playVideo();
    this.setState({ ended: false });
  }
  onPlayerStateChange(event) {
    if (event.data === window['YT'].PlayerState.ENDED) {
      this.setState({ ended: true });
    }
  }
  onPlaybackQualityChange(event) {
    event.target.setPlaybackQuality('highres');
  }
  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  componentDidUpdate() {
    if (this.state.ended) {
      this.props.history.push('/welcome-las');
    }
  }
  render() {
    return (
      <div className="video-container">
        <div id={this.props.containerId || 'player'} className={css(animated.magic)}></div>
      </div>
    );
  }
}

export default withRouter(Video);