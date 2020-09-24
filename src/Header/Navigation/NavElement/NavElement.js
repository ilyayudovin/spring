import React, {useState} from 'react';
import '../../../Styles/Header.scss';
import ExpandedList from "./ExpandedList/ExpandedList";
import lists from './../../../ExpandedListItems';
import { AnimateOnChange } from 'react-animation'

const NavElement = (props) => {

  const [isExpanded, setIsExpanded] = useState(false);

  let chosenList;
  for(let x in lists.list){
    if(x === props.name){
      chosenList = x;
    }
  }

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <>
    <div className="navElementContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <li className={!lists.list[chosenList].length && "hoverableExpandedItem"}>
        <div>
          <span>{props.name}</span>
          {
            !!lists.list[chosenList].length && <div className='arrow'/>
          }
        </div>
      </li>
      <AnimateOnChange>
      {
        isExpanded && !!lists.list[chosenList].length && <ExpandedList list={lists.list[chosenList]} />
      }
      </AnimateOnChange>
    </div>
    </>
  );

};

export default NavElement;
