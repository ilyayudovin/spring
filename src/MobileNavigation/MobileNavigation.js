import React, { useContext } from 'react';
import './SideNav.scss';
import lists from '../ExpandedListItems.json';
import MobileNavElement from '../MobileNavElement/MobileNavElement';
import HeaderContext from '../Contexts/HeaderContext';

const MobileNavigation = () => {
  // eslint-disable-next-line
  const [showMobileNav, setShowMobileNav] = useContext(HeaderContext);

  const navElements = Object.keys(lists.list)
    .map((name, index) => <MobileNavElement key={lists.list[index]} name={name} />);

  const classes = showMobileNav ? 'sideNav showSideNav' : 'sideNav';

  return (
    <div className={classes}>
      <div className="sideNavContainer">
        {navElements}
      </div>
    </div>
  );
};

export default MobileNavigation;
