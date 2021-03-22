import { allCountry } from '../../../network';


//get all country
export const requestGetCountry = async () => {
  try {
    const countryData = await allCountry();
    return countryData;
  } catch (error) {
    console.log(error);
  }
}