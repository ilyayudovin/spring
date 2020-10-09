import React from 'react';
import columnInfo from '../../jsonInfo/AdditionalInfo.json';
import AdditionalInfoListsColumn from '../AdditionalInfoListsColumn/AdditionalInfoListsColumn';

const AdditionalInfoLists = () => (
  <div className="additionalInfoLists">
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
);

export default AdditionalInfoLists;
