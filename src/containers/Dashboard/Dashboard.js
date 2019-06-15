import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './Dashboard.css'

import Spinner from '../../components/UI/Spinner/Spinner';



const Dashboard = (props) => {

    useEffect(() => {
        props.getProfile()
    }, []);

    const  user = props.user;
    const  profile = props.profile;
    const loading = props.loading;

    //user is logged in but has no profile
    let dashboardContent;

    if(loading) {
        dashboardContent = <Spinner/>
    }
    if(!user) {
        dashboardContent = (
            <p>Please SignUp first</p>
        )
    }
    if( user && !profile) dashboardContent = (
        <div>
            <p>Welcome {user.name}</p>
            <p>You have not setup a profile, please add some info</p>
            <Link to='/create-profile'> >Create profile</Link>
        </div>
    )

    
    // user has profile
    if(profile) {
        dashboardContent = <h4>Display profile</h4>
    }

    return (
        <div className={classes.Dashboard}>
            {dashboardContent}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        user: state.auth.token,
        profile: state.profile.profile,
        loading: state.profile.loading,
        errors: state.profile.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(actions.getCurrentProfile()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);