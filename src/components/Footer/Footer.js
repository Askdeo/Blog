import React from 'react';

import classes from './Footer.css';
const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            CopyRight &copy; {new Date().getFullYear()} 
        </footer>
    )
}

export default Footer;