import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Label } from 'storybook-project/dist';
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
        <Button text="Press me!" />
        <Label>Label</Label>
      </div>
    );
  }
}
