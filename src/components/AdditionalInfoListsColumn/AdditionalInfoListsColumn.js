import React from 'react';
import PropTypes from 'prop-types';

const AdditionalInfoListsColumn = ({ p, ul }) => (
  <div className="infoListsColumn">
    <p><strong>{p}</strong></p>
    <ul>
      {
        ul.map((item) => <li key={item}>{item}</li>)
      }
    </ul>
  </div>
);

AdditionalInfoListsColumn.propTypes = {
  p: PropTypes.string.isRequired,
  ul: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdditionalInfoListsColumn;
