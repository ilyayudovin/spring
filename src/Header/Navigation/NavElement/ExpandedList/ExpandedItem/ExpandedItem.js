import React from 'react';
import '../../../../../Styles/ExpandedItem.scss';
const ExpandedItem = (props) => {
  return (
    <li className="expandedItem">{props.name}</li>
  )
};

export default ExpandedItem;
