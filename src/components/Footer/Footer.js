import React from 'react';
import LearnMore from '../LearnMore/LearnMore';
import './Footer.scss';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import OfficialInfo from '../OfficialInfo/OfficialInfo';

const Footer = () => (
  <div className="footer">
    <LearnMore />
    <div className="footerInfoContainer">
      <AdditionalInfo />
      <OfficialInfo />
    </div>
  </div>
);

export default Footer;
