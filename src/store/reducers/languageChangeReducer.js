import * as actionTypes from '../actions/actionTypes';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        changeLang:"Switch to Russian",
        SignUp:"SignUp",
        Login:"Login",
        Logout:"Logout",
        Home:"Home",
        Profile:"Profile",
        submit:"Submit",
        name: 'name',
        password: 'password',
        confirmPassword: 'Confirm Password'


      },
    rus: {
        changeLang:"Перейти на английскую версию сайта",
        SignUp:"Зарегистрироваться",
        Login:"Войти",
        Logout:"Выйти",
        Home:"На Главную",
        Profile: 'Профиль',
        submit:"Отправить",
        name: 'имя',
        password: 'пароль',
        confirmPassword: 'Подтвердите пароль'
      }
});

const initialState = {
    language: strings
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LANG:
            strings.setLanguage(state.language.submit === 'Submit' ? 'rus' : 'en')
            return {
                ...state
            }
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;