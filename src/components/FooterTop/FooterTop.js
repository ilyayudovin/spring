import React from 'react';
import footerTopLists from '../../FooterTopInfo.json';
import FooterTopThird from '../FooterTopThird/FooterTopThird';

const FooterTop = () => (
  <div className="footerTop">
    <div className="footerTopContainer">
      {
        footerTopLists.map((section, index) => <FooterTopThird key={footerTopLists[index].name} name={section.name} text={section.text} link={section.link} />)
      }
    </div>
  </div>
);

export default FooterTop;
