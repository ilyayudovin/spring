import React from 'react';
import ExpandedItem from '../../../Navigation/NavElement/ExpandedList/ExpandedItem/ExpandedItem';
import '../../../../Styles/MobileExpandedList.scss';

const MobileExpandedList = ({ list }) => {
  const expandedMenu = list.map((item) => <ExpandedItem name={item} />);
  return (
    <div className="mobileExpandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

export default MobileExpandedList;
