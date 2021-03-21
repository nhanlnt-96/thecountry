import React, { useEffect } from 'react';
import { Menu, Spin } from 'antd';
import CountryNameInput from './CountryNameInput';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountry } from '../redux/country/actions';

import '../styles/Sidebar.css';

const Sidebar = () => {
  const country = useSelector(state => state.countryReducer.country);
  const loading = useSelector(state => state.countryReducer.loading);
  const error = useSelector(state => state.countryReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);
  
  console.log(loading);

  return (
    <div className="sidebar-component">
      <div className="sidebar__top">
        <CountryNameInput/>
      </div>

      <div className="sidebar__bottom">
        <Menu style={{'backgroundColor': 'transparent'}}>
          {loading && <Spin/>}
          {country && country.map((val) => {
            return (
              <Menu.Item key={val.name}>{val.name}</Menu.Item>
            )
          })}
        </Menu>
        {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}

export default Sidebar;