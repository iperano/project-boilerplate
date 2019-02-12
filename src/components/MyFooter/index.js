import React from 'react';
import { Footer, ImageText } from 'storybook-project/dist';

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

export default class MyFooter extends React.Component {
  render() {
    return <Footer links={links} text="Duff Brewery" />;
  }
}
