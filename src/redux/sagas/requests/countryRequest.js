import {allCountry} from "../../../services";

export const requestGetCountry = async () => {
    return await allCountry();
}