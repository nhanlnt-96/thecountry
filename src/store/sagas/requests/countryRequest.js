import {allCountry, searchCountry} from '../../../network';


//get all country
export const requestGetCountry = async () => {
    try {
        const countryData = await allCountry();
        return countryData;
    } catch (error) {
        console.log(error);
    }
}

//search country name
export const requestSearchCountry = async (countryName) => {
    try {
        const countryResult = await searchCountry(countryName);
        return countryResult;
    } catch (error) {
        console.log(error);
    }
}