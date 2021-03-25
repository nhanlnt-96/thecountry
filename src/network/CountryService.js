import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/search';

//get all-getCountry
export const allCountry = async () => {
    return axios.get(`${baseURL}/all`);
};