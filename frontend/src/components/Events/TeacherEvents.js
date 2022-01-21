import React, { useEffect } from 'react';
import { useState } from 'react';
import Eventinfo from './EventInfo';

const TeacherEvents = () => {

    const [loadedevents, setLoadedevents] = useState();
    let idTeacher = localStorage.getItem('userId' || '');
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(`http://localhost:3001/api/event/teacher/${idTeacher}`);
            const responseData = await response.json();
            setLoadedevents(responseData);
        };
        getEvents();
    }, []);
    return (
        <div>
            <section id="events" className="events mt-5">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {loadedevents && loadedevents.map((event) => (
                            <Eventinfo key={event._id} id={event._id} name={event.name} desc={event.desc} 
                            date={event.date} src={event.img} visible="initial"></Eventinfo>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default TeacherEvents;
