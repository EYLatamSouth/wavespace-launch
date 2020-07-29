import React, { Component } from 'react';
import axios from 'axios';
import Wave2 from '../Wave2/Wave2';
import Progress from '../Progress/Progress';
import Approvers from '../Approvers/Approvers';
import Video from '../Video/Video';

const API_URL = 'https://wavespace-launch.azurewebsites.net/api/HttpTriggerCheckApproval?code=r3CQN4DJUWeSGrdKaqqEZqhZFMOtrAZipcRwoRoCQCfUrm9TCLB0RA==';
const LAUNCH_NEEDED = 3;

class Wait extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0, count: 0, approvers: [] };
    this.getProgress = this.getProgress.bind(this);
  }
  getProgress() {
    if (this.state.count < LAUNCH_NEEDED) {
      axios.get(API_URL).then((response) => {
        const people = response.data;
        const percentage = (people.personApproval.length * 100) / LAUNCH_NEEDED;
        this.setState({ progress: percentage, count: people.personApproval.length, approvers: people.personApproval });
      });
    }
  }
  componentDidMount() {
    this.inverval = setInterval(() => (this.getProgress()), 5000);
  }
  componentDidUpdate() {
    if (this.state.count === LAUNCH_NEEDED) {
      clearInterval(this.inverval);
    }
  }
  render() {
    let video;
    if (this.state.count === LAUNCH_NEEDED) {
      video = <Video />;
    }
    return (
      <div>
        <Wave2
          color="#ffe600"
          thickness={14}
          scale={0.1}
        />
        <Progress
          text="wavespace"
          percentage={this.state.progress}
        />
        <Approvers
          names={this.state.approvers}
        />
        {video}
      </div>
    );
  }
}

export default Wait;