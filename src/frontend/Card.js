import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <li className="flex__item">

          <h1 className="flex__item__score">Score</h1>
          <h2 className="flex__item__score">Confidence Phrase</h2>

          <div className="flex__item__bottom">
              <h2 className="flex__item__text">Agincourt</h2>
              <h3 className="flex__item__text">STEM</h3>
              <p className="flex__item__text">6:00pm</p>
          </div>

        </li>
    );
  }
}

export default Card;