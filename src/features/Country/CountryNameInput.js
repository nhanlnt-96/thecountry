import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

export const CountryNameInput = () => {
    return (
        <Search placeholder="Enter country name..." style={{ width: "90%" }} />
    )
}

export default CountryNameInput;