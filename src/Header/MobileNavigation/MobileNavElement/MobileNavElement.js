import React, {useState} from 'react';
import '../../../Styles/MobileNavElement.scss';
import lists from './../../../ExpandedListItems';
import MobileExpandedList from "./MobileExpandedList/MobileExpandedList";
import { AnimateOnChange } from 'react-animation'
import Collapse from '@material-ui/core/Collapse';

const MobileNavElement = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let chosenList;
  for(let x in lists.list){
    if(x === props.name){
      chosenList = x;
    }
  }

  const handleMouseClick = () => {
    setIsExpanded(!isExpanded);
  };

  return(
    <>
      <div onClick={handleMouseClick} className='MobileNavElement'>
        {props.name}
        {
          !!lists.list[chosenList].length &&
          <AnimateOnChange>
            {
              isExpanded
                ? <div className='arrow arrowReverse' />
                : <div className='arrow' />
            }
            </AnimateOnChange>
        }
        </div>
      {
        !!lists.list[chosenList].length && <Collapse in={isExpanded}><MobileExpandedList list={lists.list[chosenList]} /></Collapse>
      }
    </>
  )
};

export default MobileNavElement;
