import React from 'react';
import PropTypes from 'prop-types';

const operations = [
  '+',
  '-',
  '÷',
  '=',
  'x',
];

const Button = (props) => {
  const { value, handleClick } = props;

  return (
    <div className={`button ${operations.includes(value) ? 'orange' : ' '} `} id={`button-${value}`} onClick={() => handleClick(value)} onKeyDown={() => null} role="button" tabIndex={0}>
      {value}
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  value: '',
  handleClick: () => { },
};

export default Button;
