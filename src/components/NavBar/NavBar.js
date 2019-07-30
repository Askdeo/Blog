import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../.././store/actions/index';
import classes from './NavBar.css';

import LangChange from '../LangChange/LangChange';


const NavBar = (props) => {
    
    const logoutHandler = () => {
        props.clearProfile();
        props.onLogout();
    }

    let Auth = (
        <div className={classes.Authorization}>
            <li>
                <NavLink className={classes.Link} to='/signup'>
                    {props.langChange.language.SignUp}
                </NavLink>
            </li>
            <li>
                <NavLink className={classes.Link} to='/login'>
                    {props.langChange.language.Login}
                </NavLink>
            </li>
        </div>
    )

    if(props.isAuthenticated) {
        Auth = (
            <div className={classes.Authorization}>
                <li>
                    <button onClick={logoutHandler} className={classes.Link}>
                        {props.langChange.language.LogOut}
                    </button>
                    <img className={classes.Avatar} src= {'http://localhost:5000/' + props.token.avatar} alt={props.token.name}/>
                </li>
            </div>
        )
    }

    return (
        <nav className={classes.NavBar}>
            <ul className={classes.LinksList}>
                <div>
                    <li>
                        <LangChange/>
                    </li>
                    <li>
                        <NavLink className={classes.Link} exact to='/'>
                            {props.langChange.language.Home}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.Link} to="/profile">
                            {props.langChange.language.Profile}
                        </NavLink>
                    </li>
                </div>
                {Auth}
            </ul>
        </nav>
      );
    
};


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token,
        langChange: state.langChange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        clearProfile: () => dispatch(actions.clearProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);