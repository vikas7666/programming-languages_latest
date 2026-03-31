import React from "react";
// import Netflix from './components/Netflix'  // if we exported default way 
import { Netflix, Footer, Header } from "./components/Netflix";  // if we imported using names not default way 
import Profile from '../src/components/Profile';
// import "./components/Netflix.css";
import { EventHanding } from "./components/EventHandling";
import "./components/EventHandling.css";

export const App = () => {
  return (
    /* 
    <> => best way 
    <React.Fragment></React.Fragment>
    <Fragment></Fragment
    
    */
    <>
        {/* <Header />
        <Footer /> */}
        {/* <Netflix /> */}
        <Profile />
        {/* <EventHanding></EventHanding> */}
    </>
  )
};