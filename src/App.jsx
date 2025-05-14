import { useState, useEffect } from 'react';
import './App.css';
import Logo from './logo';
import Gallery from './Gallery';
import UpcomingEvents from './UpcomingEvents';
import Header from './HEADER.JSX';
import AboutAfrosoul from './AboutAfrosoul';
import Footer from './Footer';

function App() {
  return (

   <>
   <Header/>
   <AboutAfrosoul/>
   <div>
   <UpcomingEvents />
   </div>
   
      <Gallery />
      <Footer/>
    </>
      
  );
}


export default App;