import React from 'react'
import { useState, useEffect } from 'react'
// Animation 
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './Home/Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import ScroollToTopBttn from './ScroollToTopBttn'


function Main() {
    const [displayScrollBttn, setDisplayScrollBttn] = useState(false);

    window.onscroll = () => {
      if(window.scrollY > 100){
        setDisplayScrollBttn(true);
      } else {
        setDisplayScrollBttn(false);
      }
    }

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation speed in ms
        once: false,     // animate only once
        offset: 100,    // trigger point
      });
    }, []);

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div className="absolute bottom-0 right-[10]">
        {displayScrollBttn && <ScroollToTopBttn />}
      </div>  
    </div>
  )
}

export default Main