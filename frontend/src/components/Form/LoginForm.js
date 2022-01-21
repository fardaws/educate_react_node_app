import axios from "axios";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { handleRoleChange } from "../../redux/actions";
import "./Form.css";
import InputFiled from './InputFiled';

const Loginform = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState("");

    const {
        email,
        password,
        role
    } = useSelector(state => state);
    // console.log("role , ", role);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            email,
            password
        }

        try {
            let result = await axios.post('http://localhost:3001/api/auth/login', user);
            if (result.data.user) {
                dispatch(handleRoleChange(result.data.user.role));
                localStorage.setItem('role',result.data.user.role); 
            }
            if (result.data) {
                setErrorMsg(result.data.message);
                if (result.data.message == "here user") {
                    console.log("result.data",result.data.user._id);
                    localStorage.setItem('userId',result.data.user._id)
                    history.push('/');
                }
            }
        } catch (error) {
            console.log("Error : ", error);
        }
    }
    const renderAlert = () => {
        if (errorMsg != "here user" && errorMsg.length > 0) {
            return (
                <div className="alert alert-danger" role="alert">
                    {errorMsg}
                </div>
            )
        }
    }
    return (
        <div className="registration-form mt-5">
            <form onSubmit={handleSubmit}>
                <div className="form-icon" >
                    <span><i className="bi bi-person-fill" style={{ fontSize: "50px" }} /></span>
                </div>
                <div>
                    {renderAlert()}
                </div>
                <InputFiled type="email" id="email" placeholder="Email"></InputFiled>
                <InputFiled type="password" id="password" placeholder="Password"></InputFiled>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-block create-account">Login</button>
                </div>
            </form>
            <div className="social-media">
                <h5>Login with social media</h5>
                <div className="social-icons text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="facebook"><i className="bx bxl-facebook" title="Facebook" /></a>
                    <a href="#" className="google-plus"><i className="bi bi-google" title="Google" /></a>
                    <a href="#"><i className="bi bi-twitter" title="Twitter" /></a>
                </div>
            </div>
        </div>
    );
}

export default Loginform;
