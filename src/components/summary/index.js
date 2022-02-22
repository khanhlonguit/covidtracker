import { Grid } from '@material-ui/core';
import React from 'react';
import LineChart from '../charts/linechart';
import Hightmaps from'../charts/highmaps';
import {useState, useEffect} from 'react';

export default function Summary({report, selectedCountryId}){
    const [mapData, setMapData] = useState({});
    useEffect(() =>{

        if(selectedCountryId){
            import(
                `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
            ).then((res) => setMapData(res));
        }

    }, [selectedCountryId]);

    return(
    <Grid container spacing={3}>
        <Grid item sm={8} xs = {12}>
            <LineChart data = {report}/>
        </Grid>
        <Grid item sm={4} xs = {12}>
            <Hightmaps mapData = {mapData}/>
        </Grid>
    </Grid>
    )
}