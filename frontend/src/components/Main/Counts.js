import React from 'react';
import PureCounter from '@srexi/purecounterjs';
const Counts = () => {
    return (
        <div>
            <section id="counts" className="counts section-bg">
                <div className="container">
                    <div className="row counters">
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start={0} data-purecounter-end={1232} data-purecounter-duration={1} className="purecounter" />
                            <p>Students</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start={0} data-purecounter-end={64} data-purecounter-duration={1} className="purecounter" />
                            <p>Courses</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start={0} data-purecounter-end={42} data-purecounter-duration={1} className="purecounter" />
                            <p>Events</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                            <p>Trainers</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Counts;
