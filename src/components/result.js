import PropTypes from 'prop-types';
import React from 'react';

const Result = (props) => {
  const { result } = props;

  return (
    <p className="result">
      {result}
    </p>
  );
};

Result.propTypes = {
  result: PropTypes.string,
};

Result.defaultProps = {
  result: '0',
};

export default Result;
