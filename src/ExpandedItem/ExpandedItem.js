import React from 'react';
import './ExpandedItem.scss';

const ExpandedItem = ({ name }) => (
  <li className="expandedItem hoverableExpandedItem">{name}</li>
);

export default ExpandedItem;
