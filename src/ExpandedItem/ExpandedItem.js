import React from 'react';
import PropTypes from 'prop-types';
import './ExpandedItem.scss';

const ExpandedItem = ({ name }) => (
  <li className="expandedItem hoverableExpandedItem">{name}</li>
);

ExpandedItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExpandedItem;
