import React, {useEffect, useState} from 'react';
import {Menu, Spin} from 'antd';
import {allCountry} from "../services";
import CountryNameInput from './CountryNameInput';

import '../styles/Sidebar.css';

const Sidebar = () => {
    const [country, setCountry] = useState([]);
    const [isBusy, setIsBusy] = useState(true);
    const [nameCountryInput, setNameCountryInput] = useState(undefined);

    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async () => {
        try {
            const data = await allCountry();
            setCountry(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBusy(false);
        }
    }

    return (
        <div className="sidebar-component">
            <div className="sidebar__top">
                <CountryNameInput/>
            </div>

            <div className="sidebar__bottom">
                <Menu style={{"backgroundColor": "transparent"}}>
                    {isBusy ? <Spin tip="Loading..."/> : country.map((val) => {
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