import React, { useState } from 'react';
import '../../../Styles/MobileNavElement.scss';
import { AnimateOnChange } from 'react-animation';
import Collapse from '@material-ui/core/Collapse';
import lists from '../../../ExpandedListItems.json';
import MobileExpandedList from './MobileExpandedList/MobileExpandedList';

const MobileNavElement = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let chosenList;
  Object.keys(lists.list).forEach((key) => {
    if (key === name) {
      chosenList = key;
    }
  });

  const handleMouseClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div onClick={handleMouseClick} role="presentation" className="mobileNavElement">
        {name}
        {
          !!lists.list[chosenList].length
          && (
          <AnimateOnChange>
            {
              isExpanded
                ? <div className="arrow arrowReverse" />
                : <div className="arrow" />
            }
          </AnimateOnChange>
          )
        }
      </div>
      {
        !!lists.list[chosenList].length
        && (<Collapse in={isExpanded}><MobileExpandedList list={lists.list[chosenList]} /></Collapse>)
      }
    </>
  );
};

export default MobileNavElement;
