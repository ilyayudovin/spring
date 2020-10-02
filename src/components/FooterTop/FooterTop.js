import React from 'react';
import footerTop from '../../FooterTopInfo.json';
import FooterTopThird from '../FooterTopThird/FooterTopThird';

const FooterTop = () => (
  <div className="footerTop">
    <div className="footerTopContainer">
      {
        footerTop.list.map((section) => <FooterTopThird name={section.name} text={section.text} link={section.link} />)
      }
    </div>
  </div>
);

export default FooterTop;
