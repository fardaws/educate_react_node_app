import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Main from '../components/Main/Main';
import { useSelector } from "react-redux"
const Home = () => {
    const {
        username,
        email,
        password,
        role
    } = useSelector(state => state);
    console.log("role de user : ", role);
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default Home;
