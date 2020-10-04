import React from 'react';
import PropTypes from 'prop-types';

const LearnMoreThird = ({ name, text, link }) => (
  <div className="third">
    <h2>{name}</h2>
    <p>{text}</p>
    <a href="/#">{link}</a>
  </div>
);
LearnMoreThird.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default LearnMoreThird;
