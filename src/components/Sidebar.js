import React, { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountry, searchCountryName } from '../store/country/actions';

import '../styles/Sidebar.css';

const Sidebar = () => {
  const country = useSelector(state => state.countryReducer.country);
  const dispatch = useDispatch();
  const [countryNameInput, setCountryNameInput] = useState('');

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  const onSearchBtnClick = (countryNameInput) => {
    dispatch(searchCountryName(countryNameInput));
    console.log(countryNameInput);
  }

  return (
    <div className="sidebar-component">
      <div className="sidebar__top">
        <input type="text" value={countryNameInput} placeholder="enter country name..."
               onChange={(e) => setCountryNameInput(e.target.value)}/>
        <button onClick={() => onSearchBtnClick(countryNameInput)}>Search</button>
      </div>

      <div className="sidebar__bottom">
        <Menu style={{'backgroundColor': 'transparent'}}>
          {country && country.map((val) => {
            return (
              <Menu.Item key={val.name}>{val.name}</Menu.Item>
            )
          })}
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;