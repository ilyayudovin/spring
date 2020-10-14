import React from 'react';
import anchorsList from '../../jsonInfo/AnchorsList.json';
import Anchor from '../Anchor/Anchor';

const AnchorsList = () => (
  <div className="footerAnchorsList">
    {
      anchorsList.map((anchor, index) => (
        <Anchor
          key={anchorsList[index].name}
          name={anchor.name}
          text={anchor.text}
        />
      ))
    }
  </div>
);

export default AnchorsList;
