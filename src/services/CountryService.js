import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1';

export const allCountry = async () => {
    return axios.get(`${baseURL}/all-countries`);
}

export const searchCountry = async (searchCountryName) => {
    return axios.get(`${baseURL}/search/`, {
        params: {
            countryName: searchCountryName
        }
    })
}