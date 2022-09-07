import React from 'react'
import Header from "../../Components/Header";
import Section01 from "../../Components/Section01";
import Section02 from "../../Components/Section02";
import Section03 from "../../Components/Section03";
import Section04 from "../../Components/Section04";
import Section05 from "../../Components/Section05";
import Slider from "../../Components/Slider";
import Blog from "../../Components/Blog";
import Vision from "../../Components/Vision";
import Footer from "../../Components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Section01 />
            <Section03 />
            <Section02 />
            <Section04 />
            <Section05 />
            <Slider />
            <Blog />
            <Vision />
            <Footer />



        </>
        /* //   <Section03 />
        //   <Section02 />
        //   <Section03 />
        //   <Section04 />
        //   <Section05 />
        //   <Blog />
        //   <Vision />
        //   <Footer /> */


    );
}

export default Home;