import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

export default function CountrySelector({value, handleOnChange, Countries}){
    return(
    <FormControl>
        <InputLabel htmlFor = 'country-selector' >Quốc gia</InputLabel>
            <NativeSelect
            value = {value}
            onChange={handleOnChange}
            inputProps={{
                name: 'country',
                id: 'country-selector'
            }}>
                {
                    Countries.map((country) => {
                        return (
                            <option value = {country.ISO2.toLowerCase()}>
                                {country.Country}
                            </option>
                        )
                    })
                }
            </NativeSelect>
    </FormControl>
    )
}