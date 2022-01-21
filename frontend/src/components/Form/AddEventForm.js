import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Addcourse = () => {
    const history = useHistory();
    let [enteredName, setEnteredName] = useState("");
    let [enteredDesc, setEnteredDesc] = useState("");
    let [enteredDate, setEnteredDate] = useState();
    let userID = localStorage.getItem('userId' || '');
    const [file, setFile] = useState();
    const pickedFileHandler = (e) => {
        setFile(e.target.files[0]);
    }
    console.log("file", file);
    const getName = (e) => {
        setEnteredName(e.target.value)
    }
    const getDesc = (e) => {
        setEnteredDesc(e.target.value)
    }
    const getDate = (e) => {
        setEnteredDate(e.target.value);
    }
    // console.log("enteredDate",enteredDate);
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', enteredName)
        formData.append('desc', enteredDesc)
        formData.append('date', enteredDate)
        formData.append('idTeacher', userID)
        formData.append('img', file)
        console.log(formData);
        axios.post('http://localhost:3001/api/event', formData).then(
            (Result) => {
                console.log("Result from BE = ", Result);

            }
        )
    }
    return (
        <div>
            <div className="registration-form mt-5">
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center mb-3'>add Event</h2>
                    <div className="form-group">
                        <input type="text" className="form-control item rounded-0"
                            id="eventName" placeholder="event name" required value={enteredName} onChange={getName} />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control rounded-0" id="" rows="3" placeholder='describe your event .. '
                            onChange={getDesc} value={enteredDesc}></textarea>
                    </div>
                    <div className="form-group row">
                        <input type="date" className="form-control item rounded-0 col m-3"
                            onChange={getDate} value={enteredDate} />
                        <input type="file" accept=".jpg, .png, .jpeg" className='form-control col m-3 rounded-0 ' onChange={pickedFileHandler} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-block create-account">Create event</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addcourse;
