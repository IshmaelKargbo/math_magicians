import React, { useState } from 'react';
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

const Calculator = () => {
  const [result, setResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  onclick = (sign) => {
    const res = calculate(result, sign);
    setResult(res);
  };

  const { total, next, operation } = result;

  return (
    <div className="calculator">
      <Result result={`${total ?? ''}${operation ?? ''}${next ?? ''}`} />
      {
          numAndSigns.map((value) => <Button key={value} value={value} onClick={onclick} />)
        }
    </div>
  );
};

export default Calculator;
