import React from 'react';

import classes from './Input.css'

const Input = (props) => {
    return (
        <div>
            <input
                type= {props.type}
                name={props.name}
                className={classes.Inputs}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                />
        </div>
    )
};

export default Input;