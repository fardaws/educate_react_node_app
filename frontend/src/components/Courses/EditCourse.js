import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
const Editcourse = () => {
    let educationCategory = [{ 'id': '1', 'title': 'Natural and Physical Sciences' },
    { 'id': '2', 'title': 'Information Technology' },
    { 'id': '3', 'title': 'Engineering and Related Technologies' }
    ];
    const { id } = useParams();
    const history=useHistory(); 
    const [loadedCourse, setLoadedCourse] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    useEffect(() => {
        const getCourseInfo = async () => {
            const response = await fetch(`http://localhost:3001/api/course/${id}`);
            const responseData = await response.json();
            setLoadedCourse(responseData);
        };
        getCourseInfo();
    }, []);
    // console.log("loadedCourse", loadedCourse);
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleEditForm = async(e) => {
        e.preventDefault();
        let course = {
            name,
            category,
            desc,
            price,
        }
        const response = await axios.put(`http://localhost:3001/api/course/${id}`,course); 
        console.log("response from BE",response);
        history.push(`/mycourses`); 
    }
    return (
        <div>
            {loadedCourse && <div className="registration-form mt-5">
                <form onSubmit={handleEditForm}>
                    <h2 className='text-center mb-3'>Edit course</h2>
                    <div className="form-group">
                        <input type="text" className="form-control item rounded-0"
                            id="courseName" placeholder="course name" defaultValue={loadedCourse.name} onChange={handleChangeName} />
                    </div>
                    <div className="form-group row">
                        <label className='col-3'>Category :</label>
                        <select id="" className="form-select form-select-sm col rounded-0 me-3" onChange={handleChangeCategory}>
                            {educationCategory && educationCategory.map(cat => (
                                <option value={cat.title} key={cat.id}>{cat.title}</option>))}
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control rounded-0" id="" rows="3" placeholder='describe your course.. '
                            defaultValue={loadedCourse.desc} onChange={handleChangeDesc}></textarea>
                    </div>
                    <div className="form-group row">
                        <input type="number" className="form-control item rounded-0 col m-3"
                            id="" placeholder="Price" defaultValue={loadedCourse.price} onChange={handleChangePrice} required />
                        {/* <input type="file" accept=".jpg, .png, .jpeg" className='form-control col m-3 rounded-0 ' /> */}
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-block create-account">Create course</button>
                    </div>
                </form>
            </div>}
        </div>
    );
}

export default Editcourse;
