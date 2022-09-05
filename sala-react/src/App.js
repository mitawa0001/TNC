import './App.css';
import React, { useState } from 'react';
import Header from "./Components/Header";
import Section01 from "./Components/Section01";
import Section02 from "./Components/Section02";
import Section03 from "./Components/Section03";
import Section04 from "./Components/Section04";
import Section05 from "./Components/Section05";
import Blog from "./Components/Blog";
import Vision from "./Components/Vision";
import Footer from "./Components/Footer";


import Home from './Pages/home/Home';

// import  Aboutproject from "./Components/Aboutproject";
// import  Overinvestor from "./Components/Overinvestor";

// import  Contactsection from "./Components/Contactsection";
// import  Officelocation from "./Components/Officelocation";
// import  Getintouch from "./Components/Getintouch";
// import  Map from "./Components/Map";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Section01 />
      <Section03 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Blog />
      <Vision />
      <Footer /> */}
      {/* <Aboutection01 /> */}
      {/* <Aboutproject />
     {/* <Overteam /> */}
      {/* <Overinvestor />  */}
      {/* <Overinvestor />
     <Contactsection />
     <Officelocation />
     <Getintouch /> */}
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Todos" element={<AddTodo />} /> */}
      </Routes>

    </BrowserRouter>


    // <Header />
    // <Section01 />
    // <Section02 />
    // <Section03 />
    // <Section04 />
    // <Section05 />
    // <Blog />
    // <Vision />
    // <Footer />
    // <Aboutection01 />
    // <Aboutproject />
    // <Overteam />
    // <Overinvestor />
    // <Overinvestor />
    // <Contactsection />
    // <Officelocation />
    // <Getintouch />
    // <Map />
  );
}

export default App;
