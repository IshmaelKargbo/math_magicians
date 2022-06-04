import React from 'react';
import Button from './button';
import Result from './result';
import calculate from '../logic/caculate';

const numAndSigns = [
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
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  onClick = (sign) => {
    const result = calculate(this.state, sign);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculator">
        <Result result={`${total ?? ''}${operation ?? ''}${next ?? ''}`} />
        {
          numAndSigns.map((value) => <Button key={value} value={value} onClick={this.onClick} />)
        }
      </div>
    );
  }
}

export default Calculator;
