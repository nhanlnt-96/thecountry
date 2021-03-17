import React, {useEffect, useState} from 'react';
import {Menu} from 'antd';

import '../styles/Sidebar.css';
import {allCountry} from "../services";

const Sidebar = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        allCountryDisplay();
    }, []);

    const allCountryDisplay = async () => {
        try {
            const data = await allCountry();
            setCountry(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Menu style={{"backgroundColor": "rgba(225, 225, 225, 0.6)"}}>
            <h2></h2>
            {country.map((val) => <Menu.Item key={val.callingCodes}>{val.name}</Menu.Item>)}
        </Menu>
    );
}

export default Sidebar;