import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutection01 from "../Components/Aboutection01";
import Abouteproject from "../Components/Aboutproject";
// import Overteam from "../Components/Overteam";
import Overinvestor from "../Components/Overinvestor";
import Vision from "../Components/Vision";



function Contact() {
    return (
        <>
            <Header />
            <Aboutection01 />
            <Abouteproject />
            {/* <Overteam /> */}
            <Overinvestor/>
            <Vision />
            <Footer />
        </>

    );
}

export default Contact;