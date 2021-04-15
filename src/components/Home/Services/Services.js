import React from 'react';
import floride from '../../../images/001-dental.png'
import cavity from '../../../images/tooth (1).png'
import image from '../../../images/tooth.png'
import ServiceDetail from './ServiceDetail/ServiceDetail';
const serviceData = [
    {
        name : "floride treatment",
        img: floride,
    },
    {
        name : "floride treatment",
        img: cavity,
    },
    {
        name : "floride treatment",
        img: image,
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5 className="mt-5">Our Services</h5>
                <h2 style={{color:"#eb4e5f"}}>Servies We Provide</h2>
            </div>
            <div className="d-felx justify-content-center" >
            <div className="row mt-5">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
           </div>
            </div>
        </section>
    );
};

export default Services;