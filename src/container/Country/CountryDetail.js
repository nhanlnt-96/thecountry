import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import '../../styles/Country.css';

const CountryDetail = () => {
  const state = useSelector(state => ({...state.countriesData}));
  return (
    <div className="country-component">
      {
        state.countryDetail ? (
          <div className="country__detail__container">
            <Row>
              <Col span={24}>
                <h1>{state.countryDetail.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>
                <img width={350} src={state.countryDetail.flag} alt={`${state.countryDetail.name}-flag`}/>
              </Col>
            </Row>
            <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
            </Row>
            <Row>
              <Col span={12}>col-8</Col>
              <Col span={12}>col-8</Col>
            </Row>
          </div>
        ) : <h1>No data</h1>
      }
    </div>
  );
}

export default CountryDetail;