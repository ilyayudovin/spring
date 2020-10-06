import React from 'react';
import columnInfo from '../../AdditionalInfo.json';
import AdditionalInfoListsColumn from '../AdditionalInfoListsColumn/AdditionalInfoListsColumn';

const AdditionalInfoLists = () => (
  <div className="additionalInfoLists">
    <div className="additionalInfoListsContainer">
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
