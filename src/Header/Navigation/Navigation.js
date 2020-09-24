import React from 'react';
import { AnimateOnChange } from 'react-animation';
import { Close, Menu } from '@material-ui/icons';
import logo from '../OG-Spring.svg.png';
import NavElement from './NavElement/NavElement';

const Navigation = ({ setState, state }) => {
  const names = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="navigation">
      <div className="container">
        <div>
          <img alt="Spring" src={logo} />
        </div>
        <ul>
          {names.map((name) => <NavElement name={name} />)}
        </ul>

        <div className="burger-icon" onClick={handleClick} role="presentation">
          <AnimateOnChange
            animationIn="fadeIn"
            animationOut="fadeOut"
          >
            {
              state
                ? (
                  <Close
                    fontSize="large"
                    style={{
                      color: 'white', position: 'fixed', zIndex: '100', top: 10, right: 20,
                    }}
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
