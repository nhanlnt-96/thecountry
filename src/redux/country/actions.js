import { GET_ALL_COUNTRY } from "./actionType";

export const getAllCountry = (country) => {
    return {
        type: GET_ALL_COUNTRY,
        data: country
    }
}