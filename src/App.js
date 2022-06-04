import React from 'react';

import './App.css';
import Calculator from './components/caculator';

class App extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="container">
          <Calculator />
        </div>
      </main>
    );
  }
}

export default App;
