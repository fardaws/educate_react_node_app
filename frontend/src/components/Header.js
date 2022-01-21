import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
const Header = () => {
    let {
        role
    } = useSelector(state => state);
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        window.location.replace("/");
        // history.push('/'); 
    }
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="/">Educate</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="active" href="/">Home</a></li>
                            <li><Link to="/courses" >Courses</Link></li>
                            <li><a href="trainers.html">Trainers</a></li>
                            <li><a href="/events">Events</a></li>
                            {role == "student" && <li><a href="pricing.html">Basket</a></li>}
                            {role == "teacher" &&
                                <li className="dropdown"><a href="#"><span>My courses</span> <i className="bi bi-chevron-down" /></a>
                                    <ul>
                                        <li><Link to="/addcourse">Add course</Link></li>
                                        <li><Link to="/mycourses" >Courses List</Link></li>
                                    </ul>
                                </li>
                            }
                            {role == "teacher" &&
                                <li className="dropdown"><a href="#"><span>My events</span> <i className="bi bi-chevron-down" /></a>
                                    <ul>
                                        <li><Link to="/addevent">Add event</Link></li>
                                        <li><Link to="/myevents" >Events List</Link></li>
                                    </ul>
                                </li>
                            }
                            <li><a href="contact.html">Contact</a></li>
                            {role == "student" && <li><a href="contact.html">Profile</a></li>}
                            {role == "teacher" && <li><a href="contact.html">Profile</a></li>}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {role == "teacher" && <Link to="/" className="get-started-btn" onClick={logout} >Logout</Link>}
                    {role == "student" && <Link to="/" className="get-started-btn" onClick={logout} >Logout</Link>}

                    {role != "teacher" && <Link to="/login" className='ms-3'>Login</Link> &&
                        role != "student" && <Link to="/login" className='ms-3'>Login</Link>
                    }
                    {role != "teacher" && <Link to="/signup" className="get-started-btn" >Sign up</Link> &&
                        role != "student" && <Link to="/signup" className="get-started-btn" >Sign up</Link>
                    }
                </div>
            </header>
        </div>

    );
}

export default Header;
