import React from 'react';
import Button from './button';
import Result from './result';

const numbersAndSigns = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <Result result="0" />
        {numbersAndSigns.map((value) => <Button key={value} value={value} />)}
      </div>
    );
  }
}

export default Calculator;
