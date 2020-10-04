import React from 'react';
import columnInfo from '../../FooterBottomTopLeftInfo.json';
import FooterBottomTopLeftColumn from '../FooterBottomTopLeftColumn/FooterBottomTopLeftColumn';

const FooterBottomTopLeft = () => (
  <div className="footerBottomTopLeft">
    <div className="footerBottomTopLeftContainer">
      {
          columnInfo.map((column, index) => <FooterBottomTopLeftColumn key={columnInfo[index].p} p={column.p} ul={column.ul} />)
        }
    </div>
  </div>
);

export default FooterBottomTopLeft;
