import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1> Hello World! </h1>
        <h4>Links:</h4>
        <div className={styles.customHome} >
          <Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
        </div>
        <div className={styles.customHome} >
          <Link href="a" to="/about"> Go to About page! </Link>
        </div>
      </div>
    );
  }
}
