import React from 'react';
import "./Form.css";
import InputFiled from './InputFiled';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import { useState } from "react";
import axios from "axios";
const Form = () => {
    const history = useHistory();
    const {
        username,
        email,
        password
    } = useSelector(state => state);
    const [errorMsg, setErrorMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username, email, password
        }
        axios.post('http://localhost:3001/api/auth/student/register', user).then(
            (result) => {
                if (result.data) {
                    setErrorMsg(result.data.message);
                    console.log(errorMsg);
                    if (result.data.message == "here user") {
                        history.push('/login')
                    }
                }
            }
        )
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
                <InputFiled type="text" id="username" placeholder="Username"></InputFiled>
                <InputFiled type="email" id="email" placeholder="Email"></InputFiled>
                <InputFiled type="password" id="password" placeholder="Password"></InputFiled>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-block create-account">Create Account</button>
                </div>
            </form>
            <div className="social-media">
                <h5>Sign up with social media</h5>
                <div className="social-icons text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="facebook"><i className="bx bxl-facebook" title="Facebook" /></a>
                    <a href="#" className="google-plus"><i className="bi bi-google" title="Google" /></a>
                    <a href="#"><i className="bi bi-twitter" title="Twitter" /></a>
                </div>
            </div>
        </div>
    );
}

export default Form;
