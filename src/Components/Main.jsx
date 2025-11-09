import React from 'react'
import { useState } from 'react'
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

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {displayScrollBttn && <ScroollToTopBttn />}
    </div>
  )
}

export default Main