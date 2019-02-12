import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import { increase, setWord, showPopup, removePopup} from './actions';

import { Button } from 'storybook-project/dist/';
import { Footer } from 'storybook-project/dist/';
import { Header } from 'storybook-project/dist/';
import { Navigation } from 'storybook-project/dist/';
import { Card } from 'storybook-project/dist/';
import { Main } from 'storybook-project/dist/';
import MyPopup from '../../components/MyPopup';
import MyMenu from '../../components/MyMenu';


const beersList = require('../App/db/beers');

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
  {
    id: 5,
    content: <a href="http://github.com"><img border="0" alt="Github" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" width="30" height="30"/></a>,
    active: true,
  },
];

const page_links = [
  {
    id: 1,
    content: <a href="/Home">Home</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="/About">About</a>,
    
  },
];

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.printA = this.printA.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.setPopup = this.setPopup.bind(this);
    this.state = {
        word: props.word,
    }
  }

  setPopup(beer) {
    this.props.showPopup(beer);
  }
  removePopup() {
    this.props.removePopup();
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

  addFavorites(beerId) {
    // TODO: provjera da li id postoji u favoritima:
    // ako postoji maknuti
    // ako ne postoji staviti u favorite

    // kreiranje objekta
    const objCard = {
      id: beerId,
      type: 'FAVORITES',
    };
    // promjena propsa
    this.props.setCardEvents(objCard);
  }

  addCart(beerId) {
    const objCard = {
      id: beerId,
      type: 'CART',
    };
    this.props.setCardEvents(objCard);
  }

  render() {

    const cards = beersList.map(beer =>
      (<Card
        id={beer.id}
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        iconFavorites="/icons/star-empty.png"
        iconFavorites= "/icons/star-empty.png"
        iconCart="/icons/plus.png"
        iconDetails="/icons/info.png"
        onClickFavorites={this.props.increase1}//{() =>{this.addFavorites(beer.id)}}
        onClickCart={() =>{this.addCart(beer.id)}}
        onClickDetails={() => this.setPopup(beer)}
      />));
      


      const favoritesCount = this.props.cardevents.filter(e => e.type == 'FAVORITES').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'FAVORITES').length : ''; 
      const cartCount = this.props.cardevents.filter(e => e.type == 'CART').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'CART').length : '';

    
    return (
      <div className="home">
      <Header
        imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
        class="" 
        text="Duff Brewery" />
        <Navigation links={page_links} />
        <div className={styles.content}>
          <Main>{cards}</Main>
        </div>



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


        <MyMenu favoritesCount={favoritesCount} cartCount={cartCount} />

        <div><Footer links={links} text="Duff Brewery" /></div>
       
       
        
        

      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.home.beers,
  cardevents: state.home.cardevents,
  number: state.home.number,
  abc: 3,
  word: state.home.word,
  popup: state.home.popup,
});

const mapDispatchProps = dispatch => ({
  setCardEvents: (objCard) => dispatch(setCardEvents(objCard)),
  increase1: () => dispatch(increase(1)),
  increase100: () => dispatch(increase(100)),
  setWord: (word) => dispatch(setWord(word)),
  showPopup: beer => dispatch(showPopup(beer)),
  removePopup: () => dispatch(removePopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
