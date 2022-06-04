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
  const { value, onClick } = props;

  return (
    <div className={`button ${operations.includes(value) ? 'orange' : ' '} `} id={`button-${value}`} onClick={() => onClick(value)} onKeyDown={() => null} role="button" tabIndex={0}>
      {value}
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: '',
  onClick: () => { },
};

export default Button;
