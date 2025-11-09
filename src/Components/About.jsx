import React from 'react'
import { LuDownload } from "react-icons/lu";

import ProfileImage from './../assets/About__page.jpg'
   

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white pt-20 pb-5 h-auto md:h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-extrabold text-black mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-10">
          <div className="w-full sm:w-1/3 md:w-5/6">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-slate-500 max-w-2xl">
              I'm a Frontend developer focused on building fast, accessible, and beautiful web
              experiences. I enjoy turning ideas into functional interfaces using modern tools
              and best practices.
            </p>
            <div className="py-5">
              <p className="text-black"><span className="text-[#92b115ee] text-lg font-bold">20+</span> Completed Project</p>
            </div>
            <div className="mt-6">
              <div className="inline-block">
                <a
                  href="#"
                  className="flex items-center bg-[#92b115ee] text-white px-5 py-2 rounded-md shadow hover:bg-[#71822bee] transition"
                >
                  Domnload CV
                  <LuDownload className="inline-block ml-2 w-5 h-5" />
                </a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
