import React, { Component } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Info } from './components/Info/Info';
import { Description } from './components/Description/Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Info />
          <Description />
        </main>
      </div>
    );
  }
}

export default App;
