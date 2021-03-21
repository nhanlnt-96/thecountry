import { allCountry } from '../../../services';

export const requestGetCountry = async () => {
  try {
    const countryData = await allCountry();
    return countryData;
  } catch (error) {
    console.log(error);
  }
}