import React, { useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';


import classes from './CreateProfile.css';
import Input from '../../../components/UI/Input/Input';
import SelectList from '../../../components/UI/SelectList/SelectList'
import TextArea from '../../../components/UI/TextArea/TextArea';
import FilePicker from '../../../components/UI/FilePicker/FilePicker';


const CreateProfile = (props) => {

    // form states and handlers

    const [ formSexState, setFormSexState ] = useState('Male');

    const sexChangeHandler = (event) => {
        setFormSexState(event.target.value);
        console.log(formSexState)
    }

    const optionsForSex = [
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'}
    ];


    const [ formRelationsState, setFormRelationsState ] = useState('Single');
    
    const relationsChangeHandler = (event) => {
        setFormRelationsState(event.target.value);
        console.log(formRelationsState)
    };

    const optionsForRelations = [
        {label: 'Single', value: 'Single'},
        {label: 'in a relationship', value: 'in a relationship'},
        {label: 'Married', value: 'Married'},
        {label: 'Intrested in', value: 'Intrested in'},
        {label: 'it is complicated', value: 'It is complicated'}
    ];




    const [ formLocationState, setFormLocationState ] = useState('');

    const locationChangeHandler = (event) => {
        setFormLocationState(event.target.value);
    };

    const [ formLanguagesState, setFormLanguagesState ] = useState('');

    const languagesChangeHandler = (event) => {
        setFormLanguagesState(event.target.value);
    };

    const [ formEducationState, setFormEducationState ] = useState('');

    const educationChangeHandler = (event) => {
        setFormEducationState(event.target.value);
    };

    const [ formJobState, setFormJobState ] = useState('');

    const jobChangeHandler = (event) => {
        setFormJobState(event.target.value);
    };

    const [ formBioState, setFormBioState ] = useState('');

    const bioChangeHandler = (event) => {
        setFormBioState(event.target.value);
    };


    const [ formAvatarState, setFormAvatarState ] = useState('');

    const avatarChangeHandler = (event) => {
            setFormAvatarState(event.target.files[0])
    }

    // Create profile
    const createProfileHandler = (event) => {
        const profile = {
            sex: formSexState,
            relation: formRelationsState,
            location: formLocationState,
            languages: formLanguagesState,
            education: formEducationState,
            job: formJobState,
            bio: formBioState,
            // avatar: formAvatarState
        }
        console.log(profile);
        event.preventDefault();
        props.createProfile(profile)
    }

    return (
        <div className={classes.CreateProfile}>
            <div className={classes.Title}>
                <h1>Create Your Profile</h1>
                <p>Let's get some information to make your profile stand out</p>
                <small>* required fields</small>
            </div>
            <form onSubmit={createProfileHandler}>
                
                <SelectList
                    options={optionsForSex}
                    name='sex'
                    onChange={sexChangeHandler}
                    value={formSexState}
                />
                <SelectList
                    options={optionsForRelations}
                    name='relation'
                    onChange={relationsChangeHandler}
                    value={formRelationsState}
                />
                <Input
                    type='input'
                    name='Location'
                    onChange={locationChangeHandler}
                    value={formLocationState}
                    placeholder='Location'
                />
                
                <Input
                    type='input'
                    name='Languages'
                    onChange={languagesChangeHandler}
                    value={formLanguagesState}
                    placeholder='Langueges you speak'
                />
                <Input
                    type='input'
                    name='Education'
                    onChange={educationChangeHandler}
                    value={formEducationState}
                    placeholder='Your Education'
                />
                <Input
                    type='input'
                    name='Job'
                    onChange={jobChangeHandler}
                    value={formJobState}
                    placeholder='You working in'
                />
                <TextArea
                    name='Bio'
                    onChange={bioChangeHandler}
                    value={formBioState}
                    placeholder='Some words about you. What you like, you don not like, your favorite activites'
                />
                <FilePicker 
                onChange={avatarChangeHandler}
                />
                <h4>Add Social Network Links</h4>
                <small>Optional</small>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.token,
        profile: state.profile.profile,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProfile: (profile) => dispatch(actions.createCurrentProfile(profile)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);