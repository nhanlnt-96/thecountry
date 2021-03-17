import React, {useEffect, useState} from 'react';
import {allCountry} from "../../services";
import '../../styles/Country.css';

const Country = () => {
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
        <div className="country-component">
            <h1>All Country</h1>
            {country.map(val => <h4>{val.name}</h4>)}
        </div>
    );
}

export default Country;