import React from 'react';
import ExpandedItem from '../ExpandedItem/ExpandedItem';
import './MobileExpandedList.scss';

const MobileExpandedList = ({ list, isExpanded }) => {
  const expandedMenu = list.map((item, index) => <ExpandedItem key={index} name={item} />);
  return (
    <div className={`mobileExpandedMenu ${isExpanded ? 'collapse' : ''}`}>
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

export default MobileExpandedList;
