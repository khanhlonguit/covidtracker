import React from 'react';

import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';


const UseStyles = makeStyles({
    wrapper: (props) => {
        if(props.type === 'Confirmed') return {borderLeft: '5px solid #c9302c' }
        if(props.type === 'Recovered') return {borderLeft: '5px solid #28a745' }
        else return {borderLeft: '5px solid gray' }
    },

    title: {
        fontSize: 20,
        marginBottom: 5
    },

    count:{
        fontWeight: 'bold', 
        fontSize: 18
    }

});


export default function Highightcard({title, count, type }) {
    const styles = UseStyles({type});

    return (
    <Grid item sm = {4} xs = {12}>
    <Card className={styles.wrapper}>
        <CardContent>
            <Typography component= "p" variant="body2" className = {styles.title}>{title}</Typography>
            <Typography component= "span" variant="body2" className = {styles.count}>{count}</Typography>
        </CardContent>
    </Card>
    </Grid>
    )
}