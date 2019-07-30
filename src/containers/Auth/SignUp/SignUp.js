import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import classes from './SignUp.css';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/Input';






const SignUp = (props) => {

    // States for sign up from and methods
    const [formNameState, setFormNameState] = useState('');
    const [formEmailState, setFormEmailState] = useState('');
    const [formPasswordState, setFormPasswordState] = useState('');
    const [formConfirmedPasswordState, setFormConfirmedPasswordState] = useState('');

    const nameChangeHandler = (event) => {
        setFormNameState(event.target.value)
    };
    const emailChangeHandler = (event) => {
        setFormEmailState(event.target.value)
    };
    const passwordChangeHandler = (event) => {
        setFormPasswordState(event.target.value)
    };
    const confirmedPasswordChangeHandler = (event) => {
        setFormConfirmedPasswordState(event.target.value)
    };

    //Submit form method
    // const SignUpFormHandler = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:5000/api/users/register', {
    //         name: formNameState,
    //         email: formEmailState,
    //         password: formPasswordState.toString(),
    //         confirmedPassword: formConfirmedPasswordState.toString()
    //     })
    //         .then(response => {
    //             console.log(response)
    //             props.history.push('/login')

    //         })
    //         .catch(err => console.log(err));
    // };
    const submitHandler = (event) => {
        event.preventDefault();
        const user = 
            {
                name: formNameState,
                email: formEmailState,
                password: formPasswordState.toString(),
                confirmedPassword: formConfirmedPasswordState.toString()
            }
        props.onSignUp(user, props.history);
    }
    

    return (
        <div className={classes.SignUp}>
            <form className={classes.Form} onSubmit={submitHandler}>
                <div className={classes.FormElement}>
                    <Input
                        type='text'
                        name='name'
                        value={formNameState}
                        placeholder={props.langChange.language.name}
                        onChange={nameChangeHandler}
                     />
                </div>
                <div className={classes.FormElement}>
                    <Input
                        type='email'
                        name='e-mail'
                        value={formEmailState}
                        placeholder='Email'
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
           <div className={classes.FormElement}>
                <Input
                    type='password'
                    name='confirmedPassword'
                    value={formConfirmedPasswordState}
                    placeholder={props.langChange.language.confirmPassword}
                    onChange={confirmedPasswordChangeHandler}
                />
           </div>
           <button className={classes.Submit} type='submit'>{props.langChange.language.submit}</button>
            </form>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        langChange: state.langChange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (user, history) => dispatch(actions.signUp(user, history)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));