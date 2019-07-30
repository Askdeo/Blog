import React from 'react';
import { connect } from 'react-redux';

import classes from './LangChange.css';

import * as actions from '../..//store/actions/index';


const LangChange = (props) => {

    const changeLangHandler = () => {
        props.onLangChange();
    }
    
    return (
        <div className={classes.LangChange}>
            <button onClick={changeLangHandler}>{props.langChange.language.changeLang}</button>
        </div>
    )

}


const mapStateToProps = state => {
    return {
        langChange: state.langChange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLangChange: () => dispatch(actions.changeLang())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LangChange);