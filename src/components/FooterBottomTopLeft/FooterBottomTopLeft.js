import React from 'react';
import ColumnInfo from '../../FooterBottomTopLeftInfo.json';
import FooterBottomTopLeftColumn from '../FooterBottomTopLeftColumn/FooterBottomTopLeftColumn';

const FooterBottomTopLeft = () => (
  <div className="footerBottomTopLeft">
    <div className="footerBottomTopLeftContainer">
      {
          ColumnInfo.list.map((column) => <FooterBottomTopLeftColumn p={column.p} ul={column.ul} />)
        }
    </div>
  </div>
);

export default FooterBottomTopLeft;
