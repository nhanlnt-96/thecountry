import React from 'react';
import { useSelector } from 'react-redux';

export default function TableNameCountry() {
  const state = useSelector(state => state.countriesData.countryDetail);

  return (
    <div className="table-name-component">
      <h3>Names</h3>
      <table>
        <tbody>
        <tr>
          <td className="row__title">Native Name</td>
          <td>{state.nativeName}</td>
        </tr>
        <tr>
          <td className="row__title">Alternative spellings</td>
          <td>{state.altSpellings.join(', ')}</td>
        </tr>
        <tr>
          <td colSpan={2} className="row__title">Translations</td>
        </tr>
        <tr>
          <td className="row__title">de</td>
          <td>{state.translations.de}</td>
        </tr>
        <tr>
          <td className="row__title">es</td>
          <td>{state.translations.es}</td>
        </tr>
        <tr>
          <td className="row__title">fr</td>
          <td>{state.translations.fr}</td>
        </tr>
        <tr>
          <td className="row__title">ja</td>
          <td>{state.translations.ja}</td>
        </tr>
        <tr>
          <td className="row__title">it</td>
          <td>{state.translations.it}</td>
        </tr>
        <tr>
          <td className="row__title">br</td>
          <td>{state.translations.br}</td>
        </tr>
        <tr>
          <td className="row__title">pt</td>
          <td>{state.translations.pt}</td>
        </tr>
        <tr>
          <td className="row__title">nl</td>
          <td>{state.translations.nl}</td>
        </tr>
        <tr>
          <td className="row__title">hr</td>
          <td>{state.translations.hr}</td>
        </tr>
        <tr>
          <td className="row__title">fa</td>
          <td>{state.translations.fa}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
