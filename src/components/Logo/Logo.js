import React, { Component } from 'react';
import styles from './Logo.scss';

class Logo extends Component {
  render() {
    const styleClasses = this.props.absolute ? `${styles.container} ${styles.small}` : styles.container; 
    return (
      <div className={styleClasses}>
        <span>wave</span><span className={styles.bold}>space</span>
      </div>
    );
  }
}

export default Logo;