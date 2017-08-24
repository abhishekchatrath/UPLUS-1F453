import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {

    // for(var i = 0; i < 1; i++){

    // }

    return (
      <div className="body">

        <ul className="flex-container wrap">

            <Card />

        </ul>

    </div>
    );
  }
}

export default CardList;