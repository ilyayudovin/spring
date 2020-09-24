import React from 'react';
import '../../Styles/SideNav.scss';
import MobileNavElement from './MobileNavElement/MobileNavElement';

const MobileNavigation = (props) => {
  const arr = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];
  const navElements = arr.map((el) => <MobileNavElement name={el} />);

  const classes = props.show ? 'sideNav showSideNav' : 'sideNav';

  return (
    <div className={classes}>
      <div className="sideNavContainer">
        {navElements}
      </div>
    </div>
  );
};

export default MobileNavigation;
