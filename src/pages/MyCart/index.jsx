import React from 'react';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'react'

import { Main, Table, Button } from 'storybook-project/dist/';

import { connect } from 'react-redux';
import BeerFooter from '../../components/BeerFooter';
import BeerHeader from '../../components/BeerHeader';
import BeerNavigation from '../../components/BeerNavigation';
import BeerMenu from '../../components/BeerMenu';
// import './index.css';
import styles from './index.css';
import { removeCardEvents, setCardEvents } from '../Home/action';

const beersJ = require('../App/beers');

const header = [
  {
    name: '#',
  },
  {
    name: 'Naziv',
  },
  {
    name: 'Opis',
  },
  {
    name: 'Količina',
  },
];

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const cartValues = [];

    this.props.cardevents.filter(e => e.type == 'MYCART').map((cart) => 
		{
      const name = beersJ.filter(e => e.id == cart.id)[0].name;
      const description = beersJ.filter(e => e.id == cart.id)[0].description;
      cartValues.push({'id': cart.id, 'name': name, 'desc': description, 'number': 1});
    });

    
    const cartCount = this.props.cardevents.filter(e => e.type == 'MYCART').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'MYCART').length : '';
    const carts = (<Table
      headers={header}
      values={cartValues}

    />);
    return (
      <div className={styles.main}>
         <Header
          imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
          class="" 
          text="Duff Brewery" />
          <Navigation links={page_links} />
        

          <div className={styles.content}>
            <Main>{carts}</Main>
          </div>
          <div className={styles.menu}>
            <MyMenu favoritesCount={favoritesCount} cartCount={cartCount} />
            <Footer links={links} text="Duff Brewery" />
          </div>
        </div>

    );
  }
}

const mapStateToProps = state => ({
  cardevents: state.home.cardevents,
});

const mapDispatchProps = dispatch => ({
  removeCardEvents: objCard => dispatch(removeCardEvents(objCard)),
  setCardEvents: objCard => dispatch(setCardEvents(objCard)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Cart);
