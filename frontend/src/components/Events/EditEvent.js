import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Editevent = () => {
    const history = useHistory();
    const { id } = useParams();
    let [name, setEnteredName] = useState();
    let [desc, setEnteredDesc] = useState();
    let [date, setEnteredDate] = useState();
    let idTeacher = localStorage.getItem('userId' || '');
    let [loadedevent, setLoadedEvent] = useState();
    const getName = (e) => {
        setEnteredName(e.target.value)
    }
    const getDesc = (e) => {
        setEnteredDesc(e.target.value)
    }
    const getDate = (e) => {
        setEnteredDate(e.target.value);
    }
    useEffect(() => {
        const getEventInfo = async () => {
            const response = await fetch(`http://localhost:3001/api/event/${id}`);
            const responseData = await response.json();
            setLoadedEvent(responseData)
        };
        getEventInfo();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let event = {
            name, desc, date, idTeacher
        }
        const response = await axios.put(`http://localhost:3001/api/event/${id}`, event);
        history.push('/myevents');
    }
    return (
        <div>
            {loadedevent && <div className="registration-form mt-5">
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center mb-3'>Edit Event</h2>
                    <div className="form-group">
                        <input type="text" className="form-control item rounded-0"
                            id="eventName" placeholder="event name" required defaultValue={loadedevent.name} onChange={getName} />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control rounded-0" id="" rows="3" placeholder='describe your event .. '
                            onChange={getDesc} defaultValue={loadedevent.desc}></textarea>
                    </div>
                    <div className="form-group row">
                        <input type="date" className="form-control item rounded-0 col m-3"
                            onChange={getDate} defaultValue={loadedevent.date} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-block create-account">Edit event</button>
                    </div>
                </form>
            </div>}

        </div>
    );
}

export default Editevent;
