import React from 'react';
import PropTypes from 'prop-types';
import './ExpandItem.scss';

const ExpandItem = ({ name }) => (
  <li className="expandedItem hoverableExpandedItem">{name}</li>
);

ExpandItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExpandItem;
