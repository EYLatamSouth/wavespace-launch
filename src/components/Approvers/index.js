import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { vanishIn } from 'react-magic';
import { FaUserCheck } from 'react-icons/fa';

import "./style.scss";

const animated = StyleSheet.create({
  magic: {
    animationName: vanishIn,
    animationDuration: '1s'
  }
});

class Approvers extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [] };
  }
  componentDidUpdate() {
    const names = this.props.names || [];
    if (names.length) {
      for (let name of names) {
        if (! this.state.names.includes(name)) {
          this.setState(prevState => ({ names: [...prevState.names, name] }));
        }
      }
    } else {
      this.setState({ names: [] });
    }
  }
  render() {
    const listNames = this.state.names.map(function(name, index) {
      return (
        <li key={index} className={css(animated.magic)}>
          <FaUserCheck
            size="8vh"
          />
          <span>{name}</span>
        </li>
      );
    });
    return (
      <div className="approvers-container">
        <ul>
          {listNames}
        </ul>
      </div>
    );
  }
}

export default Approvers;