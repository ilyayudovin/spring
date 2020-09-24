import React from 'react';
import '../../../../../Styles/ExpandedItem.scss';

const ExpandedItem = (props) => (
  <li className="expandedItem hoverableExpandedItem">{props.name}</li>
);

export default ExpandedItem;
