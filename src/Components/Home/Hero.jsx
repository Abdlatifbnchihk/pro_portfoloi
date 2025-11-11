import React from 'react'
// import Profile from '../../assets/profile.svg'
import Profile from './../../assets/Profile__Image.png'
import { FiSend } from "react-icons/fi";
import { CiDesktopMouse2 } from "react-icons/ci";

function Hero() {
	return (
	<>
		<section className="w-full relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-end">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-35 sm:pt-40 sm:pb-0 lg:pt-35">
					{/* Left column - content */}
					<div className="text-start md:text-left " data-aos="fade-up">
						<p className="text-white font-medium mb-2">Hi, I am</p>
						<h1 className="text-4xl sm:text-5xl font-extrabold text-[#92b115ee] leading-tight">Abd Ellatif</h1>
						<p className="mt-3 inline-block text-white font-semibold py-1 rounded-md">Frontend developer</p>

						<p className="mt-6 text-white max-w-xl">
							I create beautiful, responsive, and user-friendly web applications with modern technologies. Passionate about clean code, pixel-perfect designs, and exceptional user experiences.
						</p>

						<div className="mt-8">
                            <button>
                                <a href="#contact" className=" flex items-center justify-center gap-2 md:justify-start bg-[#92b115ee] text-white px-6 py-3 rounded-md shadow hover:bg-[#71822bee] transition cursor-pointer"><a href="#contact">
                                    Contact Me
                                </a>
                                <FiSend /> </a>
                            </button>    
						</div>
					</div>
					{/* Right column - image */}
					<div className="flex justify-center md:justify-end" data-aos="fade-left">
						<div className="w-65 h-65 sm:w-72 sm:h-72 lg:h-100 lg:w-100 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl bg-[#71822bee] transition-all duration-300 hidden sm:block">
							<img src={Profile} alt="Profile" className="w-full h-full object-cover block" />
						</div>
					</div>
				</div>
				{/* Scroll down button */}
				<div className="absolute sm:bottom-8 bottom-[-25px] left-1/2 transform -translate-x-1/2">
					<button
						onClick={() => {
							const next = document.getElementById('about') || document.querySelector('section:nth-of-type(2)')
							if (next) {
								const header = document.querySelector('header')
								const offset = header ? header.offsetHeight : 0
								const top = next.getBoundingClientRect().top + window.pageYOffset - offset
								window.scrollTo({ top, behavior: 'smooth' })
                                
							} else {
								window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
							}
						}}
						className="p-2 rounded-full border-2 border-[#92b115ee] text-white hover:bg-[#92b115ee] hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
						aria-label="Scroll to next section"
					>
						<CiDesktopMouse2 className="w-6 h-6" />
					</button>
				</div>
			</div>
	</section>
	</>
	)
}

export default Hero
