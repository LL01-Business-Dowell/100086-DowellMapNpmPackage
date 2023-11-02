import React from 'react';
import PropTypes from 'prop-types';

class MyGreatPlace extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

MyGreatPlace.propTypes = {
  text: PropTypes.string
};

export default MyGreatPlace;
