import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import {PlayIcon, PauseIcon} from '@heroicons/react/solid';

class Waveform extends Component {  
  state = {
    playing: false,
    formId: parseInt(Math.random() * 100000),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      barHeight: 2,
      cursorWidth: 1,
      container: '#waveform' + this.state.formId,
      backend: 'WebAudio',
      height: 50,
      progressColor: '#E2125D',
      responsive: true,
      waveColor: '#FFFFFF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    return (
      <div className="flex flex-row items-center justify-center w-full h-full bg-transparent px-3 pt-2" onClick={this.props.onClick}>
        {!this.state.playing ? (<PlayIcon className="w-16 h-16 cursor-pointer text-primary-dark" onClick={this.handlePlay} />) : (<PauseIcon className="w-16 h-16 cursor-pointer text-primary-dark" onClick={this.handlePlay} />)}
        <div className="w-full h-20 pt-3 overflow-hidden" id={`waveform${this.state.formId}`} />
        <audio id="track" src={this.props.audioURL} />
      </div>
    );
  }
};

export default Waveform;