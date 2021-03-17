import React, { useEffect, useState } from 'react';
import { Menu, Spin, Input } from 'antd';
import { allCountry } from "../services";

import '../styles/Sidebar.css';

const Sidebar = () => {
    const [country, setCountry] = useState([]);
    const [isBusy, setIsBusy] = useState(true);

    useEffect(() => {
        allCountryDisplay();
    }, []);

    const allCountryDisplay = async () => {
        try {
            const data = await allCountry();
            setCountry(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBusy(false);
        }
    };

    const {Search}=Input;

    return (
        <div className="sidebar-component">
            <div className="sidebar__top">
                <Search placeholder="Enter country name..." style={{ width: 250 }} />
            </div>

            <div className="sidebar__bottom">
                <Menu style={{ "backgroundColor": "transparent" }}>
                    {isBusy ? <Spin tip="Loading..." /> : country.map((val) => {
                        return (
                            <Menu.Item key={val.callingCodes}>{val.name}</Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;