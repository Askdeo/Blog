import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/Input';

import classes from './Login.css';



const Login = (props) => {

    const [formEmailState, setFormEmailState] = useState('');
    const [formPasswordState, setFormPasswordState] = useState('');

    const emailChangeHandler = (event) => {
        setFormEmailState(event.target.value)
    };
    const passwordChangeHandler = (event) => {
        setFormPasswordState(event.target.value)
    };

    // const loginHandler = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:5000/api/users/login', {
    //         email: formEmailState,
    //         password: formPasswordState
    //     })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => console.log(err));

    // };

    const loginHandler = (event) => {
        const user = {
            email: formEmailState,
            password: formPasswordState
        }
        event.preventDefault();
        props.onLogin(user);
        props.history.push('/dashboard');
    }

    return (
        <div className={classes.Login}>
            <form className={classes.Form} onSubmit={loginHandler}>
                <div className={classes.FormElement}>
                    <Input
                        type='email'
                        name='e-mail'
                        value={formEmailState}
                        placeholder='E-mail'
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className={classes.FormElement}>
                    <Input
                        type='password'
                        name='password'
                        value={formPasswordState}
                        placeholder={props.langChange.language.password}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <button className={classes.Submit} type='submit'>{props.langChange.language.submit}</button>
            </form>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        errors: state.auth.errors,
        langChange: state.langChange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(actions.login(user)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);