import React from 'react';
import './SideNav.scss';
import lists from '../ExpandedListItems.json';
import MobileNavElement from '../MobileNavElement/MobileNavElement';

const MobileNavigation = ({ show }) => {
  const navElements = Object.keys(lists.list).map((name) => <MobileNavElement name={name} />);

  const classes = show ? 'sideNav showSideNav' : 'sideNav';

  return (
    <div className={classes}>
      <div className="sideNavContainer">
        {navElements}
      </div>
    </div>
  );
};

export default MobileNavigation;
