import React from 'react';
import ExpandedItem from "../../../Navigation/NavElement/ExpandedList/ExpandedItem/ExpandedItem";
import '../../../../Styles/MobileExpandedList.scss';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
const MobileExpandedList = (props) => {

  const expandedMenu = props.list.map(item => <ExpandedItem name={item} />);
  return (
    <div className="MobileExpandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  )
};

export default MobileExpandedList;
