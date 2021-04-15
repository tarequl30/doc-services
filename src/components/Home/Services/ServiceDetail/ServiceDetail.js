import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center container-fluid mb-3">
            <img src={service.img} alt="" width="60"/>
            <h5 className="mt-3">{service.name}</h5>
            <p className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio blanditiis at incidunt sint minima.</p>
        </div>
    );
};

export default ServiceDetail;