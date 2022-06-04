import PropTypes from 'prop-types';
import React from 'react';

class Result extends React.PureComponent {
  render() {
    const { result } = this.props;

    return (
      <p className="result">
        {result}
      </p>
    );
  }
}

Result.propTypes = {
  result: PropTypes.string,
};

Result.defaultProps = {
  result: '0',
};

export default Result;
