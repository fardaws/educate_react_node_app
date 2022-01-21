import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const Eventinfo = (props) => {
    const deleteEvent = async (e) => {
        const id = e.target.value;
        try {
            const response = await fetch(`http://localhost:3001/api/event/${id}`, { method: 'delete' });
            const responseData = await response.json();
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }
    return (
        <div className="col-md-6 d-flex align-items-stretch" key={props.id} id={props.id}>
            <div className="card">
                <div className="card-img">
                    <img src={props.src} alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a href="">{props.name}</a></h5>
                    <p className="fst-italic text-center">{props.date}</p>
                    <p className="card-text">{props.desc}</p>
                    <div className='text-center mt-2'>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ display: props.visible }}>
                            <button type="button" value={props.id} onClick={deleteEvent} className="btn btn-outline-danger ps-3 pe-3">Delete</button>
                            <Link to={`/editevent/${props.id}`} type="button" className="btn btn-outline-success ps-4 pe-4">Edit</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Eventinfo;
