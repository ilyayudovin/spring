import React from 'react';
import columnInfo from '../../AdditionalInfo.json';
import AdditionalInfoListsColumn from '../AdditionalInfoListsColumn/AdditionalInfoListsColumn';

const AdditionalInfoLists = () => (
  <div className="AdditionalInfoLists">
    <div className="AdditionalInfoListsContainer">
      {
        columnInfo.map((column, index) => (
          <AdditionalInfoListsColumn
            key={columnInfo[index].p}
            p={column.p}
            ul={column.ul}
          />
        ))
      }
    </div>
  </div>
);

export default AdditionalInfoLists;
