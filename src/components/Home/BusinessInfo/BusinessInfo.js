import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const infoData = [
    {
        title: 'Opening Hours',
        desc: 'We Are Open at 7 Days',
        image: '',
        background: 'Danger'
    },
    {
        title: 'Visit Our Location',
        desc: 'Idaho Boston , USA 96875',
        image: '',
        background: 'Dark'
    },
    {
        title: 'Contact Us Now',
        desc: '+1254368854',
        image: '',
        background: 'Danger'
    }
]
const BusinessInfo = () => {
    return (
        <div className="row mt-5 ms-3">
            {
                infoData.map(info => <CardInfo info={info}></CardInfo>)
            }
        </div>
    );
};

export default BusinessInfo;