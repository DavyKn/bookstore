import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <div className="categories>">
      <h3>{categories}</h3>
      <button type="button" className="check-button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
    </div>
  );
}
