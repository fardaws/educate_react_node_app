import React from 'react';
import Counts from './Counts';
import Courses from './Courses';
import Trainers from './Trainers';

const Main = () => {
    return (
        <div>
             <main id="main">
                 <Counts></Counts>
                 <Courses></Courses>
                 <Trainers></Trainers>
             </main>
        </div>
    );
}
export default Main;
