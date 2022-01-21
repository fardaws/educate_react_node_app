import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AddCourse from './pages/AddCourse';
import AddEvent from './pages/AddEvent';
import Allcourses from "./pages/AllCourses";
import MyCourses from "./pages/MyCourses";
import Coursedetails from "./pages/CourseDetails";
import Editcourse from "./pages/EditCourse";
import EditEvent from "./pages/EditEvent";
import Allevents from "./pages/AllEvents";
import MyEvents from "./pages/MyEvents";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/signup" exact>
            <SignUp></SignUp>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/addcourse" exact>
            <AddCourse></AddCourse>
          </Route>
          <Route path="/courses" exact>
            <Allcourses></Allcourses>
          </Route>
          <Route path="/mycourses" exact>
            <MyCourses></MyCourses>
          </Route>
          <Route path="/courses/:id" exact>
            <Coursedetails></Coursedetails>
          </Route>
          <Route path="/editcourse/:id" exact>
            <Editcourse></Editcourse>
          </Route>
          <Route path="/addevent" exact>
            <AddEvent></AddEvent>
          </Route>
          <Route path="/events" exact>
            <Allevents></Allevents>
          </Route>
          <Route path="/myevents" exact>
            <MyEvents></MyEvents>
          </Route>
          <Route path="/editevent/:id" exact>
            <EditEvent></EditEvent>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
