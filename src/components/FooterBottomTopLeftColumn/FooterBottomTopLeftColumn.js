import React from 'react';
import PropTypes from 'prop-types';

const FooterBottomTopLeftColumn = ({ p, ul }) => (
  <div className="footerColumn">
    <p><strong>{p}</strong></p>
    <ul>
      {
          ul.map((item, index) => <li key={item + index}>{item}</li>)
        }
    </ul>
  </div>
);

FooterBottomTopLeftColumn.propTypes = {
  p: PropTypes.string.isRequired,
  ul: PropTypes.array.isRequired,
};

export default FooterBottomTopLeftColumn;
