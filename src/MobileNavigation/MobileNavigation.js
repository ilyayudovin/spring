import React from 'react';
import './SideNav.scss';
import MobileNavElement from '../MobileNavElement/MobileNavElement';

const MobileNavigation = ({ show }) => {
  const arr = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];
  const navElements = arr.map((el) => <MobileNavElement name={el} />);

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
