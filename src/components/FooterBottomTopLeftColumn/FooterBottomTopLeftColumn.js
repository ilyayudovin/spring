import React from 'react';
import PropTypes from 'prop-types';

const FooterBottomTopLeftColumn = ({ p, ul }) => (
  <div className="footerColumn">
    <p><strong>{p}</strong></p>
    <ul>
      {
          ul.map((item) => <li>{item}</li>)
        }
    </ul>
  </div>
);

FooterBottomTopLeftColumn.propTypes = {
  p: PropTypes.string.isRequired,
  ul: PropTypes.arrayOf().isRequired,
};

export default FooterBottomTopLeftColumn;
