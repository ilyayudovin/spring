import React from 'react';
import PropTypes from 'prop-types';
import './EpxandedList.scss';
import ExpandedItem from '../ExpandedItem/ExpandedItem';

const ExpandedList = ({ list }) => {
  const expandedMenu = list.map((item, index) => <ExpandedItem key={list[index]} name={item} />);
  return (
    <div className="expandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

ExpandedList.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default ExpandedList;
