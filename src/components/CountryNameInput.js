import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../redux/country/actions';

const {Search} = Input;

export const CountryNameInput = () => {
  const [nameCountryInput, setNameCountryInput] = useState(null);
  const dispatch = useDispatch();

  const onPressEnterBtn = (nameCountryInput) => {
    dispatch(searchCountry(nameCountryInput));
  }

  return (
    <>
      <Search
        placeholder="Enter country name..."
        style={{width: '90%'}}
        value={nameCountryInput}
        onChange={(e) => setNameCountryInput(e.target.value)}
        onPressEnter={() => onPressEnterBtn(nameCountryInput)}
      />
    </>
  )
}

export default CountryNameInput;