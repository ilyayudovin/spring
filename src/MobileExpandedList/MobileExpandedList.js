import React from 'react';
import ExpandedItem from '../ExpandedItem/ExpandedItem';
import './MobileExpandedList.scss';

const MobileExpandedList = ({ list }) => {
  const expandedMenu = list.map((item, index) => <ExpandedItem key={index} name={item} />);
  return (
    <div className="mobileExpandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

export default MobileExpandedList;
