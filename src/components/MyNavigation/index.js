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
        content: <a href="/About">About</a>,
        active: this.props.active == 2,
      },

    ];
    const div =
          (
            <Navigation links={links} />
          );
    return div;
  }
}

MyNavigation.propTypes = {
  active: PropTypes.integer,
};
