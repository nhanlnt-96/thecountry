import React from 'react';
import { useSelector } from 'react-redux';

export default function TableCodesCountry() {
  const state = useSelector(state => state.countriesData.countryDetail);

  return (
    <div className="table-name-component">
      <h3>Codes</h3>
      <table>
        <tbody>
        <tr>
          <td className="row__title">ISO 3166-1 alpha-2</td>
          <td>{state.alpha2Code}</td>
        </tr>
        <tr>
          <td className="row__title">ISO 3166-1 alpha-3</td>
          <td>{state.alpha3Code}</td>
        </tr>
        <tr>
          <td className="row__title">ISO 3166-1 numeric</td>
          <td>{state.numericCode}</td>
        </tr>
        <tr>
          <td className="row__title">International calling code</td>
          <td>{state.callingCodes}</td>
        </tr>
        <tr>
          <td className="row__title">ISO 4217 currency code</td>
          <td>{state.currencies.map((val) => val.code)}</td>
        </tr>
        <tr>
          <td className="row__title">Top level domain</td>
          <td>{state.topLevelDomain}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}