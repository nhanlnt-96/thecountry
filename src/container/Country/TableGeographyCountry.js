import React from 'react';
import { useSelector } from 'react-redux';

export default function TableGeographyCountry() {
  const state = useSelector(state => state.countriesData.countryDetail);

  return (
    <div className="table-name-component">
      <h3>Geography</h3>
      <table>
        <tbody>
        <tr>
          <td className="row__title">Region</td>
          <td>{state.region}</td>
        </tr>
        <tr>
          <td className="row__title">Subregion</td>
          <td>{state.subregion}</td>
        </tr>
        <tr>
          <td className="row__title">Capital</td>
          <td>{state.capital}</td>
        </tr>
        <tr>
          <td className="row__title">Timezone</td>
          <td>{state.timezones}</td>
        </tr>
        <tr>
          <td className="row__title">Demonym</td>
          <td>{state.demonym}</td>
        </tr>
        <tr>
          <td className="row__title">Lat/Lng</td>
          <td>{state.latlng.join(', ')}</td>
        </tr>
        <tr>
          <td className="row__title">Area</td>
          <td>{`${state.area}km`}<sup>2</sup></td>
        </tr>
        <tr>
          <td className="row__title">Land borders</td>
          <td>{state.borders.join(', ')}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}