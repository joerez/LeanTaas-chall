import React from 'react';
// import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import NasaData from './components/NasaData';

class App extends React.Component {
  render() {
    const title = 'Curiosity Images';
    const subtitle = 'Launched: 2011-11-26 | Landed: 2012-08-06 | Max Sol: ';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <NasaData />
      </div>
    );
  }
}

export default App;
