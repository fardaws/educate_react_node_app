import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Addcourse = () => {
    const history = useHistory();
    let [enteredName, setEnteredName] = useState("");
    let [enteredCategory, setEnteredCategory] = useState("");
    let [enteredDesc, setEnteredDesc] = useState("");
    let [enteredPrice, setEnteredPrice] = useState("");
    let userID = localStorage.getItem('userId' || '');
    let educationCategory = [{ 'id': '1', 'title': 'Natural and Physical Sciences' },
    { 'id': '2', 'title': 'Information Technology' },
    { 'id': '3', 'title': 'Engineering and Related Technologies' }
    ]
    const [file, setFile] = useState();
    const pickedFileHandler = (e) => {
        setFile(e.target.files[0]);
    }
    // console.log("file", file);
    const getName = (e) => {
        setEnteredName(e.target.value)
    }
    const getCategory = (e) => {
        setEnteredCategory(e.target.value)
    }
    const getDesc = (e) => {
        setEnteredDesc(e.target.value)
    }
    const getPrice = (e) => {
        setEnteredPrice(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', enteredName)
        formData.append('category', enteredCategory)
        formData.append('desc', enteredDesc)
        formData.append('price', enteredPrice)
        formData.append('idTeacher', userID)
        formData.append('img', file)
        // console.log(formData);
        axios.post('http://localhost:3001/api/course', formData).then(
            (Result) => {
                console.log("Result from BE = ", Result);
                history.push("/courses")
            }
        )
    }
    return (
        <div>
            <div className="registration-form mt-5">
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center mb-3'>add course</h2>
                    <div className="form-group">
                        <input type="text" className="form-control item rounded-0"
                            id="courseName" placeholder="course name" required value={enteredName} onChange={getName} />
                    </div>
                    <div className="form-group row">
                        <label className='col-3'>Category :</label>
                        <select id="" className="form-select form-select-sm col rounded-0 me-3" value={enteredCategory} onChange={getCategory}>
                            {educationCategory && educationCategory.map(cat => (
                                <option value={cat.title} key={cat.id}>{cat.title}</option>))}
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control rounded-0" id="" rows="3" placeholder='describe your course.. '
                            onChange={getDesc} value={enteredDesc}></textarea>
                    </div>
                    <div className="form-group row">
                        <input type="number" className="form-control item rounded-0 col m-3"
                            id="" placeholder="Price" required onChange={getPrice} value={enteredPrice} />
                        <input type="file" accept=".jpg, .png, .jpeg" className='form-control col m-3 rounded-0 ' onChange={pickedFileHandler} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-block create-account">Create course</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addcourse;
