import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import { increase, setWord } from './actions';

import { Button } from 'storybook-project/dist/';


const links = [
  {
    id: 1,
    content: <a href="http://twitter.com"><img border="0" alt="Twitter" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="http://facebook.com"><img border="0" alt="Facebook" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 3,
    content: <a href="http://instagram.com"><img border="0" alt="Instagram" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 4,
    content: <a href="http://linkedin.com"><img border="0" alt="LinkedIn" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" width="30" height="30"/></a>,
    active: true,
  },
];

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.printA = this.printA.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.state = {
        word: props.word,
    }
  }

  updateWord(event) {
      /*this.setState({
          word: event.target.value,
      });*/
      this.props.setWord(event.target.value);
  }

  printA(event) {
    console.log(event);
    console.log(this.props.abc);
  }

  render() {
    return (
      <div className="home">
        <h1> Hello World! </h1>
        <Button text="Can't Press me!" disabled={true}></Button>
        <span>{this.props.number}</span>
        <button onClick={this.props.increase1}>+1</button>
        <button onClick={this.props.increase100}>+100</button>
        <button onClick={this.printA}>printA</button>
            <br />
            <input value={this.props.word} onChange={this.updateWord} />
            <br />
            {this.state.word}
            <br />
            {this.props.word}
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

const mapStateToProps = state => ({
  number: state.home.number,
  abc: 3,
  word: state.home.word,
});

const mapDispatchProps = dispatch => ({
  increase1: () => dispatch(increase(1)),
  increase100: () => dispatch(increase(100)),
  setWord: (word) => dispatch(setWord(word)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
