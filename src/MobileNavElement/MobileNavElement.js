import React, { useState } from 'react';
import './MobileNavElement.scss';
import { AnimateOnChange } from 'react-animation';
import Collapse from '@material-ui/core/Collapse';
import lists from '../ExpandedListItems.json';
import MobileExpandedList from '../MobileExpandedList/MobileExpandedList';

const MobileNavElement = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div onClick={handleMouseClick} role="presentation" className="mobileNavElement">
        {name}
        {
          !!lists.list[name].length
          && (
          <AnimateOnChange>
            <div className={`arrow ${isExpanded ? 'arrowReverse' : ''}`} />
          </AnimateOnChange>
          )
        }
      </div>
      {
        !!lists.list[name].length
        && (<Collapse in={isExpanded}><MobileExpandedList list={lists.list[name]} /></Collapse>)
      }
    </>
  );
};

export default MobileNavElement;
