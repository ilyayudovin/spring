import React from 'react';
import AdditionalInfoLists from '../AdditionalInfoLists/AdditionalInfoLists';
import NewsLetter from '../NewsLetter/NewsLetter';

const AdditionalInfo = () => (
  <div className="AdditionalInfo">
    <div className="AdditionalInfoContainer">
      <div className="AdditionalInfoContent">
        <AdditionalInfoLists />
        <NewsLetter />
      </div>
    </div>
  </div>
);

export default AdditionalInfo;
