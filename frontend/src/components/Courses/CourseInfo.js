import React from 'react';
import { Link } from 'react-router-dom';

const CourseInfo = (props) => {

    
    const deleteCourse = async (e) => {
        let id = e.target.value;
        try {
            const response = await fetch(`http://localhost:3001/api/course/${id}`, { method: 'delete' });
            const responseData = await response.json();
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" id={props.id} key={props.id}>
            <div className="course-item" >
                <img src={props.src} className="img-fluid" />
                <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{props.category}</h4>
                        <p className="price">${props.price}</p>
                    </div>
                    <h3><Link to={`/courses/${props.id}`}>{props.name}</Link></h3>
                    <p>{props.desc}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" />
                            {/* <p>{props.idTeacher}</p> */}
                            <span>Antonio</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user" />&nbsp;50
                            &nbsp;&nbsp;
                            <i className="bx bx-heart" />&nbsp;65
                        </div>
                    </div>
                    <div className='text-center mt-2'>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ display: props.visible }}>
                            <button type="button" value={props.id} onClick={deleteCourse} className="btn btn-outline-danger ps-3 pe-3">Delete</button>
                            <Link to={`/editcourse/${props.id}`} type="button" className="btn btn-outline-success ps-4 pe-4">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;
