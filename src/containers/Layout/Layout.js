import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
};

export default Layout;