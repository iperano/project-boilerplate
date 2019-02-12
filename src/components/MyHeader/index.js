import React from 'react';
import { Header } from 'storybook-project/dist';

export default class MyHeader extends React.Component {
  render() {
    const div =
            (
              <Header
                imgUrl="/icons/duff.png"
                class=""
                text="Duff BeerShop"
              />
            );
    return div;
  }
}
