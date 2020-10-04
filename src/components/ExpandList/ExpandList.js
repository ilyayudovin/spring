import React from 'react';
import PropTypes from 'prop-types';
import './EpxandList.scss';
import ExpandItem from '../ExpandItem/ExpandItem';

const ExpandList = ({ list }) => {
  const expandedMenu = list.map((item, index) => <ExpandItem key={list[index]} name={item} />);
  return (
    <div className="expandedMenu">
      <ul>
        {expandedMenu}
      </ul>
    </div>
  );
};

ExpandList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ExpandList;
