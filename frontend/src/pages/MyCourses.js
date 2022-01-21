import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Teachercourses from '../components/Courses/TeacherCourses';


const MyCourses = () => {
    return (
        <div>
            <Header></Header>
            <Teachercourses></Teachercourses>
            <Footer></Footer>
        </div>
    );
}

export default MyCourses;
