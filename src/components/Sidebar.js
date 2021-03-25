import React, {useEffect, useState} from 'react';
import {Menu, Spin} from 'antd';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {getCountryLoad} from '../store/getCountry/actions';
import {getCountryDetail} from "../store/showCountryDetail/actions";

import '../styles/Sidebar.css';

const Sidebar = () => {
    const state = useSelector(state => ({...state.countriesData}));
    const dispatch = useDispatch();
    const [countryNameInput, setCountryNameInput] = useState('');

    useEffect(() => {
        dispatch(getCountryLoad());
    }, [dispatch]);

    const onClickBtn = (countryName) => {
        const countryDetail = state.countries.find((val) => val.name === countryName);
        dispatch(getCountryDetail(countryDetail));
    }

    return (
        <div className="sidebar-component">
            <div className="sidebar__top">
                <TextField
                    style={{width: '95%'}}
                    value={countryNameInput}
                    label="Enter country name..."
                    onChange={(e) => setCountryNameInput(e.target.value)}/>
            </div>
            <div className="sidebar__bottom">
                <Menu style={{'backgroundColor': 'transparent'}}>
                    {state.loading ? <Spin/> : state.countries.filter((val) => {
                        if (countryNameInput === '') {
                            return val;
                        } else if (val.name.toLowerCase().includes(countryNameInput.toLowerCase())) {
                            return val;
                        }
                    }, {}).map((val) => {
                        return (
                            <Menu.Item onClick={() => onClickBtn(val.name)} key={val.name}>{val.name}</Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;