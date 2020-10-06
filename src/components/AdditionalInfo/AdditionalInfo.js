import React from 'react';
import AdditionalInfoLists from '../AdditionalInfoLists/AdditionalInfoLists';
import Newsletter from '../Newsletter/Newsletter';

const AdditionalInfo = () => (
  <div className="AdditionalInfo">
    <div className="AdditionalInfoContainer">
      <div className="AdditionalInfoContent">
        <AdditionalInfoLists />
        <Newsletter />
      </div>
    </div>
  </div>
);

export default AdditionalInfo;
