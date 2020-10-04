import React from 'react';
import PropTypes from 'prop-types';

const AdditionalInfoListsColumn = ({ p, ul }) => (
  <div className="infoListsColumn">
    <p><strong>{p}</strong></p>
    <ul>
      {
        ul.map((item, index) => <li key={item + index}>{item}</li>)
      }
    </ul>
  </div>
);

AdditionalInfoListsColumn.propTypes = {
  p: PropTypes.string.isRequired,
  ul: PropTypes.array.isRequired,
};

export default AdditionalInfoListsColumn;
