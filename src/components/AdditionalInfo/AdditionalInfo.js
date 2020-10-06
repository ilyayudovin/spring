import React from 'react';
import AdditionalInfoLists from '../AdditionalInfoLists/AdditionalInfoLists';
import Newsletter from '../Newsletter/Newsletter';

const AdditionalInfo = () => (
  <div className="additionalInfo">
    <div className="additionalInfoContainer">
      <div className="additionalInfoContent">
        <AdditionalInfoLists />
        <Newsletter />
      </div>
    </div>
  </div>
);

export default AdditionalInfo;
