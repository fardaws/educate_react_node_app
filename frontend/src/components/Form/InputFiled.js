import React from 'react';
import { useState } from 'react';
import "./Form.css";
import { useDispatch } from "react-redux";
import { handleEmailChange, handlePasswordChange, handleUsernameChange } from '../../redux/actions';
const Inputfiled = (props) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
        switch (props.id) {
            case "username":
                dispatch(handleUsernameChange(e.target.value));
                break;
            case "email":
                dispatch(handleEmailChange(e.target.value));
                break;
            case "password":
                dispatch(handlePasswordChange(e.target.value));
                break;
            default:
                return;
        }
    }
    return (
        <div className="form-group">
            <input type={props.type} className="form-control item"
                id={props.id} placeholder={props.placeholder}
                onChange={handleChange} required />
        </div>
    );
}

export default Inputfiled;
