import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const CourseDetails = () => {
    const { id } = useParams();
    const [loadedCourse, setLoadedCourse] = useState();
    useEffect(() => {
        const getCourseById = async () => {
            const response = await fetch(`http://localhost:3001/api/course/${id}`);
            const responseData = await response.json();
            setLoadedCourse(responseData);
        };
        getCourseById();
    }, []);
    return (
        <div>
            {loadedCourse && <section id="course-details" className="course-details mt-5">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid" src={loadedCourse.img} />
                            <h3>{loadedCourse.name}</h3>
                            <p>{loadedCourse.desc}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Trainer</h5>
                                <p><a href="#">Walter White</a></p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Course Fee</h5>
                                <p>${loadedCourse.price}</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Available Seats</h5>
                                <p>30</p>
                            </div>
                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Schedule</h5>
                                <p>5.00 pm - 7.00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </div>
    );
}
export default CourseDetails;
