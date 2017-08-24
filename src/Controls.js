import React, { Component } from 'react';
import Filters from './Filters';
import Sort from './Sort';

class Controls extends Component {
  render() {
    return (
      <div className="header__body">
          <Filters />
          <Sort />
      </div>
    );
  }
}

export default Controls;