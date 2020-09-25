import React from 'react';
import './EpxandedList.scss';
import ExpandedItem from '../ExpandedItem/ExpandedItem';

const ExpandedList = ({ list }) => {
  const expandedMenu = list.map((item) => <ExpandedItem name={item} />);
  return (
    <div className="expandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

export default ExpandedList;
