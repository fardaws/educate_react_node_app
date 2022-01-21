import React, { useState, useEffect } from 'react';
import CourseInfo from './CourseInfo';

const Teachercourses = () => {
    const [loadedCourses, setLoadedCourses] = useState();
    // console.log(loadedCourses);
    let idTeacher = localStorage.getItem('userId' || '');
    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/course/teacher/${idTeacher}`);
                const responseData = await response.json();
                // console.log(responseData);
                setLoadedCourses(responseData);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        getCourses();
    }, []);
    return (
        <div>
            <section id="popular-courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="section-title mt-5">
                        <h2>Courses</h2>
                    </div>
                    <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                        {loadedCourses && loadedCourses.map(course => (
                            <CourseInfo key={course._id} id={course._id} category={course.category} price={course.price} name={course.name}
                                desc={course.desc} src={course.img} visible="initial"></CourseInfo>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Teachercourses;
