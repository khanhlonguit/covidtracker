import React from 'react'
import { Grid } from '@material-ui/core';
import Highlightcard from './highlightcard';


export default function Highlight({report}){

    const data = report && report.length ? report[report.length-1] : [];

    const summary = [
       { 
        title : 'số ca nhiểm',
        count : data.Confirmed,
        type : 'confirmed'
       },
       { 
        title : 'khỏi',
        count : data.Recovered,
        type : 'recovered'
       },
       { 
        title : 'tử vong',
        count : data.Deaths,
        type : 'deaths'
       }
    ];

    return(
    <Grid container spacing={3}>
        {
            summary.map(item => (
            <Highlightcard title = {item.title} count = {item.count} type = {item.type}/>

        ))}
    </Grid>
    )
}