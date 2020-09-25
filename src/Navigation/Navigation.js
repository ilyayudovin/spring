import React, { useContext } from 'react';
import { AnimateOnChange } from 'react-animation';
import { Close, Menu } from '@material-ui/icons';
import logo from '../Header/OG-Spring.svg.png';
import lists from '../ExpandedListItems.json';
import NavElement from '../NavElement/NavElement';
import HeaderContext from '../Contexts/HeaderContext';

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useContext(HeaderContext);

  const handleClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="navigation">
      <div className="container">
        <div>
          <img className="navLogo" alt="Spring" src={logo} />
        </div>
        <ul>
          {Object.keys(lists.list).map((name) => <NavElement name={name} />)}
        </ul>

        <div className="burgerIcon" onClick={handleClick} role="presentation">
          <AnimateOnChange
            animationIn="fadeIn"
            animationOut="fadeOut"
          >
            {
              showMobileNav
                ? (
                  <Close
                    fontSize="large"
                    className="closeIcon"
                  />
                )
                : <Menu fontSize="large" />
            }
          </AnimateOnChange>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
