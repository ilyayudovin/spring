import React, {useState} from 'react';
import NavElement from "./NavElement/NavElement";
import { AnimateOnChange } from 'react-animation'
import {Close, Menu} from "@material-ui/icons";

const Navigation = (props) => {

  const names = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];

  const handleClick = () => {
    props.setState(!props.state);
  };

  return(
    <div className='navigation'>
      <div className='container'>
        <a>
          <img alt='Spring' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/800px-Spring_Framework_Logo_2018.svg.png' />
        </a>
        <ul>
          {names.map( name => <NavElement name={name} />)}
        </ul>
        <AnimateOnChange durationOut={10}>
          <div className='burger-icon' onClick={handleClick}>
            {
              props.state
                ? <Close fontSize="large" style={{ color: 'white',position:'fixed',zIndex: '100', right: 20, top: 10 }} />
                : <Menu fontSize="large" />
            }
          </div>
        </AnimateOnChange>
      </div>
    </div>
  );

};

export default Navigation;