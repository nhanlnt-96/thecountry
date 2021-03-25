import React from 'react';
import { useSelector } from 'react-redux';

export default function TableLanguageCountry() {
  const state = useSelector(state => state.countriesData.countryDetail);

  return (
    <div className="table-name-component">
      <h3>Language</h3>
      <table>
        {
          state.languages.map((val)=>(
            <tbody>
            <tr>
              <td className="row__title" colSpan={2}>{val.iso639_2}</td>
            </tr>
            <tr>
              <td className="row__title">{val.name}</td>
              <td className="row__title">{val.nativeName}</td>
            </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  );
}