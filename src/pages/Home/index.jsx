import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import { setCardEvents, increase, setWord, showPopup, removePopup} from './actions';


import { Footer } from 'storybook-project/dist/';
import { Header } from 'storybook-project/dist/';
import { Navigation } from 'storybook-project/dist/';
import { Card } from 'storybook-project/dist/';
import { Main } from 'storybook-project/dist/';
import MyPopup from '../../components/MyPopup';
import MyMenu from '../../components/MyMenu';


const beersList = require('../App/beers');

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
    content: <a href="https://github.com/iperano/project-boilerplate">Source</a>,
    
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
    const objCard = {
      id: beerId,
      type: 'MYFAVORITES',
    };

    this.props.setCardEvents(objCard);
  }

  addCart(beerId) {
    const objCard = {
      id: beerId,
      type: 'MYCART',
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
        iconFavorites={this.props.cardevents.filter(e => e.id == beer.id && e.type == 'MYFAVORITES').length > 0 === true ? "/icons/star-full.png" : "/icons/star-empty.png" }
        
        iconCart="/icons/plus.png"
        iconDetails="/icons/info.png"
        onClickFavorites={() =>{this.addFavorites(beer.id)}}
        onClickCart={() =>{this.addCart(beer.id)}}
        onClickDetails={() =>{ this.setPopup(beer)}}
      />));
      


      const favoritesCount = this.props.cardevents.filter(e => e.type == 'MYFAVORITES').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'MYFAVORITES').length : ''; 
      const cartCount = this.props.cardevents.filter(e => e.type == 'MYCART').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'MYCART').length : '';

    
    return (
      <div className={styles.main}>
      <div>
        <Header
        imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
        class="" 
        text="Duff Brewery" />
        <Navigation links={page_links} />
      </div>
        <div className={styles.content}>
          <Main>{cards}</Main>
        </div>



        <h4>Links:</h4>
        


        <MyMenu 
          favoritesCount={favoritesCount}
          cartCount={cartCount} 
        />

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
