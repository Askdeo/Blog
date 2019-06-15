import React from 'react';

import classes from './SelectList.css'

const SelectList = (props) => {

    const selectOptions = props.options.map((option) => {
        return (
            <option key={option.label} value={option.value}>
                {option.label}
            </option>
        )

    })

    return (
        <div>
            <select
                name={props.name}
                className={classes.Inputs}
                onChange={props.onChange}
                value={props.value}
                >
                {selectOptions}
            </select>
        </div>
    )
};

export default SelectList;