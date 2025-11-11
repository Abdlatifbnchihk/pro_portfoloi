import React from 'react'
import { useState } from 'react';

import { PiBracketsCurly } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function Skills() {
    const [displaySkills, setDisplaySkills] = useState(true);
    const [displaySkillsFre, setDisplaySkillsFre] = useState(false);
  const skills = [
    { name: 'HTML', },
    { name: 'CSS',},
    { name: 'JavaScript',},
    { name: 'ReactJs',},
    { name: 'Git', level: 'Intermediate' }
  ]

  return (
    <section id="skills" className="bg-white text-slate-800 py-16 lg:pt-25 h-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold">Skills</h2>
          <p className="mt-2 text-slate-600">Technologies and tools I use to build web applications.</p>
        </div>

        <div className='w-full'>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className='w-full lg:w-[50%]'>
                    <div className='flex justify-center' data-aos="fade-down">
                        <div className="flex items-center gap-3">
                        <PiBracketsCurly className="w-10 h-10 text-[#92b115ee] mb-4" />
                            <div className="text-lg font-medium mb-2">
                                <p className='text-xl'>Frontend Developer</p>
                                <span className='text-sm lg:text-[13px] text-gray-400'>More than 2 years</span>
                            </div>
                            <button onClick={() => setDisplaySkills(!displaySkills)}>{displaySkills ? <MdKeyboardArrowUp className='text-3xl cursor-pointer transition hover:rotate-180'/> : <MdOutlineKeyboardArrowDown className='text-3xl cursor-pointer transition hover:rotate-180'/>}</button>
                        </div>
                    </div>    
                {displaySkills ? skills.map((s) => (
                    <div key={s.name} data-aos="fade-down">
                        <div className='mb-3'>
                            <h2>{s.name}</h2>
                            <div className="mt-3 h-2 w-full bg-[#92b115ee] rounded-full opacity-50"></div>
                        </div>
                    </div>
                )) : null}
                </div>
                <div className='w-full lg:w-[50%]' data-aos="fade-down">
                    <div className='flex justify-center'>
                        <div className="flex items-center gap-3">
                        <IoColorPaletteOutline className="w-10 h-10 text-[#92b115ee] mb-4" />
                            <div className="text-lg font-medium mb-2">
                                <p className='text-xl'>Framework</p>
                                <span className='text-sm lg:text-[13px] text-gray-400'>More than 2 years</span>
                            </div>
                            <button onClick={() => setDisplaySkillsFre(!displaySkillsFre)}>{displaySkillsFre ? <MdKeyboardArrowUp className='text-3xl cursor-pointer transition hover:rotate-180'/> : <MdOutlineKeyboardArrowDown className='text-3xl cursor-pointer transition hover:rotate-180'/>}</button>
                        </div>
                    </div>    
                    {displaySkillsFre ? (<div data-aos="fade-down">
                        <div className='mb-3'>
                            <h2>Tailwind CSS</h2>
                            <div className="mt-3 h-2 w-full bg-[#92b115ee] rounded-full opacity-50"></div>
                        </div>
                        <div className='mb-3'>
                            <h2>Bootstrap</h2>
                            <div className="mt-3 h-2 w-full bg-[#92b115ee] rounded-full opacity-50"></div>
                        </div>
                        <div className='mb-3'>
                            <h2>Matrial UI</h2>
                            <div className="mt-3 h-2 w-full bg-[#92b115ee] rounded-full opacity-50"></div>
                        </div>
                    </div>) : null}
                </div>
            </div> 
        </div>       
      </div>
    </section>
  )
}
