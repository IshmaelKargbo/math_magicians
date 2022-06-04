import React from 'react';

import './App.css';
import CalculatorApp from './components/caculator';

class App extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="container">
          <CalculatorApp />
        </div>
      </main>
    );
  }
}

export default App;
