import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from './store/reducers/authReducer';
import profileReducer from './store/reducers/profileReducer';
import languageChangeReducer from './store/reducers/languageChangeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    langChange: languageChangeReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development'  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

 const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;