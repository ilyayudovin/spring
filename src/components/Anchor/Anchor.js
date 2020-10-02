import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ name, text }) => (
  <a href="/#" className="anchor">
    <div className="anchorContainer">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  </a>
);

Anchor.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Anchor;
