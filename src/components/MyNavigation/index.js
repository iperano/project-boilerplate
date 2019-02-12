import React from 'react';
import { Navigation } from 'storybook-project/dist';
import PropTypes from 'prop-types';

export default class MyNavigation extends React.Component {
  render() {
    const links = [
      {
        id: 1,
        content: <a href="/Home">Home</a>,
        active: this.props.active == 1,
      },
      {
        id: 2,
        content: <a href="/Home">Home</a>,
        active: this.props.active == 2,
      },
      {
        id: 3,
        content: <a href="/About/">About</a>,
        active: this.props.active == 3,
      },
    ];
    const div =
          (
            <Navigation links={links} />
          );
    return div;
  }
}

BeerNavigation.propTypes = {
  active: PropTypes.integer,
};
