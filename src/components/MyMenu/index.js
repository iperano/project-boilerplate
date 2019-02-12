import React from 'react';
import { Menu } from 'storybook-project/dist';
import PropTypes from 'prop-types';

export default class MyMenu extends React.Component {
  render() {
    const div =
          (
            <Menu links={
                [{
                  id: 1,
                  content: 'My favorite beers',
                  href: '/Favorites',
                  active: this.props.active == 1,
                  number: this.props.favoritesCount,
                },
                {
                  id: 2,
                  content: 'My Shopping Cart',
                  href: '/Cart',
                  number: this.props.cartCount,
                  active: this.props.active == 2,
                },
                {
                  id: 3,
                  content: 'Source code',
                  href: 'https://github.com/iperano/project-boilerplate',
                  active: this.props.active == 3,
                },
              ]}
            />
          );
    return div;
  }
}

MyMenu.propTypes = {
    favoritesCount: PropTypes.string,
    cartCount: PropTypes.string,
    active: PropTypes.integer,
};
