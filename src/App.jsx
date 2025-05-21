import { useState, useEffect } from 'react';
import './App.css';
import Logo from './logo';
import Gallery from './Gallery';
import UpcomingEvents from './UpcomingEvents';
import Header from './HEADER.JSX';
import AboutAfrosoul from './AboutAfrosoul';
import Footer from './Footer';
import ThreeCardGallery from './ThreeCardGallery';
function App() {
  return (

   <>
   <Header/>
   
   <div>
   <UpcomingEvents />
   </div>
      <Gallery />
      <AboutAfrosoul/>
      <ThreeCardGallery />
      <Footer/>
    </>
      
  );
}


export default App;