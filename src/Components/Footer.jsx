import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 sm:h-[20vh] h-[25vh]" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div>
                <a href="#" className='font-semibold text-lg text-[#92b115ee] cursor-pointer'>A.Ben Cheikh</a>
            </div>

            <nav className="flex items-center gap-4">
                <a href="#" className="text-md text-slate-600 hover:text-[#92b115ee]">Home</a>
                <a href="#about" className="text-md text-slate-600 hover:text-[#92b115ee]">About</a>
                <a href="#skills" className="text-md text-slate-600 hover:text-[#92b115ee]">Skills</a>
                <a href="#projects" className="text-md text-slate-600 hover:text-[#92b115ee]">Projects</a>
                <a href="#contact" className="text-md text-slate-600 hover:text-[#92b115ee]">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
                <a href="https://github.com/Abdlatifbnchihk" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#92b115ee] text-2xl">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/abdellatif-bencheikh-894b15364/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#92b115ee] text-2xl">
                <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#92b115ee] text-2xl">
                <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#92b115ee] text-2xl">
                <FaSquareInstagram  />
                </a>
            </div>
            
            </div>
            <div className="text-sm text-slate-600 text-center mt-10 pt-3 border-t-1">© {new Date().getFullYear()} A. Ben Cheikh. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  )
}
