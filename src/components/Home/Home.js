import React from "react"
import AppointmentService from "./AppoinmentService/AppointmentService"
import FeatureService from "./FeatureService/FeatureService"
import Header from "./Header/Header"
import Services from "./Services/Services"
import Testimonials from "./Testimonial/Testimonials"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService />
            <AppointmentService />
            <Testimonials />
        </div>
    )
}

export default Home
