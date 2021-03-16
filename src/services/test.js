import axios from "axios";

const baseURL = 'http://localhost:4001/map';

export const mapApi = async () => {
    return axios.get(baseURL);
}