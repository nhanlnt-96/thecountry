import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/search';

//get all-country
export const allCountry = async () => {
    return axios.get(`${baseURL}/all`);
};

//search country by name
export const searchCountry = async (searchCountryName) => {
    return axios.get(baseURL, {
        params: {
            countryName: searchCountryName
        }
    });
};