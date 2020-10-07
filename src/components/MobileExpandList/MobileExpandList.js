import React from 'react';
import PropTypes from 'prop-types';
import ExpandItem from '../ExpandItem/ExpandItem';
import './MobileExpandList.scss';

const MobileExpandList = ({ list, isExpanded }) => {
  const expandedMenu = list.map((item, index) => <ExpandItem key={list[index]} name={item} />);
  return (
    <div className={`mobileExpandedMenu ${isExpanded ? 'collapse' : ''}`}>
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

MobileExpandList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default MobileExpandList;
