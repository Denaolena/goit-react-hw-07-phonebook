import React from 'react';
import style from '../Filter/Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label className={style.lable}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
export default Filter;
