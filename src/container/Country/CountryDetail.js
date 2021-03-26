import React from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableNameCountry from './TableNameCountry';

import '../../styles/Country.css';
import TableGeographyCountry from './TableGeographyCountry';
import TableLanguageCountry from './TableLanguageCountry';
import TableCodesCountry from './TableCodesCountry';
import HomePage from '../../components/HomePage';

const CountryDetail = () => {
    const state = useSelector(state => ({...state.countriesData}));

    return (
        <div className="country-component">
            {
                state.countryDetail ? (
                    <div className="country__detail__container">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper className="country__detail__paper">
                                    <h1 style={{marginBottom: 0}}>{state.countryDetail.name}</h1>
                                </Paper>
                            </Grid>
                            <Grid item xs={7}>
                                <Paper className="country__detail__paper">
                                    <TableNameCountry/>
                                </Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper className="country__detail__paper">
                                    <img src={state.countryDetail.flag} alt={`${state.countryDetail.name}-flag`}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className="country__detail__paper">
                                    <TableGeographyCountry/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className="country__detail__paper">
                                    <TableLanguageCountry/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className="country__detail__paper">
                                    <TableCodesCountry/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                ) : <HomePage/>
            }
        </div>
    );
}

export default CountryDetail;