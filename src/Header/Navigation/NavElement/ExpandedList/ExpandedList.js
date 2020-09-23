import React from 'react';
import '../../../../Styles/EpxandedList.scss';
import ExpandedItem from "./ExpandedItem/ExpandedItem";

const ExpandedList = (props) => {
  console.log(props.list);
  const expandedMenu = props.list.map(item => <ExpandedItem name={item} />);
  return (
    <div className="expandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  )
};

export default ExpandedList;