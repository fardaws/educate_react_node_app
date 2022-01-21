import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Teacherevents from '../components/Events/TeacherEvents';


const MyEvents = () => {
    return (
        <div>
            <Header></Header>
            <Teacherevents></Teacherevents>
            <Footer></Footer>
        </div>
    );
}

export default MyEvents;
