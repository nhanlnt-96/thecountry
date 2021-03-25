import React from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableNameCountry from "./TableNameCountry";

import '../../styles/Country.css';

const CountryDetail = () => {
    const state = useSelector(state => ({...state.countriesData}));

    return (
        <div className="country-component">
            {
                state.countryDetail ? (
                    <div className="country__detail__container">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className="country__detail__paper">
                                    <h1 style={{marginBottom: 0}}>{state.countryDetail.name}</h1>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">
                                    <TableNameCountry/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">
                                    <img src={state.countryDetail.flag} alt={`${state.countryDetail.name}-flag`}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">xs=3</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">xs=3</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">xs=3</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className="country__detail__paper">xs=3</Paper>
                            </Grid>
                        </Grid>
                    </div>
                ) : <h1>No data</h1>
            }
        </div>
    );
}

export default CountryDetail;