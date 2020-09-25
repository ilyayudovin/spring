import React from 'react';
import '../../../../../Styles/ExpandedItem.scss';

const ExpandedItem = ({ name }) => (
  <li className="expandedItem hoverableExpandedItem">{name}</li>
);

export default ExpandedItem;
