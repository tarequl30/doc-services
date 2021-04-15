import React from 'react';
import doc from '../../../images/5790-removebg.png'
import './AppoinmentService.css'

const AppointmentService = () => {
    return (
        <section className="make-appointment mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doc} alt=""/>
                    </div>
                    <div className="col-md-7 py-5">
                        <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentService;