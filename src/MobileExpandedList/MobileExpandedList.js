import React from 'react';
import PropTypes from 'prop-types';
import ExpandedItem from '../ExpandedItem/ExpandedItem';
import './MobileExpandedList.scss';

const MobileExpandedList = ({ list, isExpanded }) => {
  const expandedMenu = list.map((item, index) => <ExpandedItem key={list[index]} name={item} />);
  return (
    <div className={`mobileExpandedMenu ${isExpanded ? 'collapse' : ''}`}>
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

MobileExpandedList.propTypes = {
  list: PropTypes.arrayOf.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default MobileExpandedList;
