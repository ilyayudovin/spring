import React, { useState } from 'react';
import './Header.scss';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="header">
      <MobileNavigation show={showMobileNav} />
      <Navigation showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
    </div>
  );
};

export default Header;
