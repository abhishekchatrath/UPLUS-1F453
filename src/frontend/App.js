import React, { Component } from 'react';
import TPL_Header from './TPL_Header';
import Controls from './Controls';
import CardList from './CardList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <TPL_Header />
        <Controls />
        <CardList />

      </div>
    );
  }
}

export default App;
