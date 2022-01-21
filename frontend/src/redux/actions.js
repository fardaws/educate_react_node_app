import {
    change_username, 
    change_email, 
    change_password,
    change_role 
} from './actionsTypes'; 

export const handleUsernameChange = (payload) => ({
    type: change_username,
    payload,
});
export const handleEmailChange = (payload) => ({
    type: change_email,
    payload,
});
export const handlePasswordChange = (payload) => ({
    type: change_password,
    payload,
}); 
export const handleRoleChange = (payload) => ({
    type: change_role,
    payload,
});