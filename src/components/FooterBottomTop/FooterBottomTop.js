import React from 'react';
import FooterBottomTopLeft from '../FooterBottomTopLeft/FooterBottomTopLeft';
import FooterBottomTopRight from '../FooterBottomTopRight/FooterBottomTopRight';

const FooterBottomTop = () => (
  <div className="footerBottomTop">
    <div className="footerBottomTopContainer">
      <div className="footerBottomTopContent">
        <FooterBottomTopLeft />
        <FooterBottomTopRight />
      </div>
    </div>
  </div>
);

export default FooterBottomTop;
