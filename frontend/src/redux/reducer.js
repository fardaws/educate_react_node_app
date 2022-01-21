import {
    change_username,
    change_email,
    change_password,
    change_role
} from './actionsTypes';

const initialState = {
    username: "",
    email: "",
    password: "",
    role: localStorage.getItem('role' || ''),
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case change_username:
            return {
                ...state,
                username: action.payload
            };
        case change_email:
            return {
                ...state,
                email: action.payload
            };
        case change_password:
            return {
                ...state,
                password: action.payload
            };
        case change_role:
            return {
                ...state,
                role: action.payload
            };
        default: return state;
    }
}
export default reducer; 