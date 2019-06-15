import React from 'react';

import classes from './FilePicker.css';

const FilePicker = (props) => {
    return (
        <div className={classes.FilePicker}>
            <input
                type="file"
                onChange={props.onChange}
                />
        </div>
    )
}

export default FilePicker;