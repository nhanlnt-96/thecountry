import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        width: "100%",
    },
});


export default function TableNameCountry() {
    const state = useSelector(state => ({...state.countriesDetailData}));

    console.log(state)

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">

                {state.countryDetail &&
                (
                    <TableBody>
                        <TableRow key={state.countryDetail.name}>
                            <TableCell component="th" scope="row">
                                Native Name
                            </TableCell>
                            <TableCell align="right">{state.countryDetail.name}</TableCell>
                        </TableRow>
                        <TableRow key={state.countryDetail.name}>
                            <TableCell component="th" scope="row">
                                Alternative spellings
                            </TableCell>
                            {state.countryDetail.altSpellings &&
                            <TableCell align="right">{state.countryDetail.altSpellings.join(', ')}</TableCell>
                            }
                        </TableRow>
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    );
}
