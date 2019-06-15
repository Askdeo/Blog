import React from 'react';

import classes from './TextArea.css'

const TextArea = (props) => {
    return (
        <div>
            <textarea
                name={props.name}
                className={classes.Inputs}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                />
        </div>
    )
};

export default TextArea;