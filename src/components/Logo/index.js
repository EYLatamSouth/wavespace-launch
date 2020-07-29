import React, { Component } from 'react';

import "./style.scss";

class Logo extends Component {
  render() {
    const styleClasses = this.props.absolute ? "logo-container small" : "logo-container";

    return (
      <div className={styleClasses}>
        <span>wave</span><span className="gold">space</span>
      </div>
    );
  }
}

export default Logo;