import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Contact Me</h2>
          <p className="mt-4 text-lg text-slate-600">Have a project in mind? Let's work together!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Contact Info & Socials */}
          <div className="flex flex-col justify-between items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <p className="flex items-center text-slate-600">
                    <span className="mr-3"><FaPhoneAlt className='text-[#92b115ee] text-xl' /></span>
                    <div>
                        <h3>
                        Call Me
                        </h3>
                        <span className='text-[13px]'> +212 621872954 </span>
                    </div>
                  </p>
                  <p className="flex items-center text-slate-600">
                    <span className="mr-3"><MdEmail className='text-[#92b115ee] text-xl' /></span>
                    <div>
                        <h3 href="tel:+1234567890" className="">
                        Email
                        </h3>
                        <span className='text-[13px]'>abdellatifbencheikh43@gmail.com</span>
                    </div>
                  </p>
                  <p className="flex items-center text-slate-600">
                    <span className="mr-3"><FaLocationDot className='text-[#92b115ee] text-xl' /></span>
                    <div>
                        <h3>Location</h3>
                        <span className='text-[13px]'>Morocco - Agadir</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
            <form action="https://formspree.io/f/xqawznwd" method='POST' className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-[#92b115ee] focus:border-[#92b115ee]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-[#92b115ee] focus:border-[#92b115ee]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-[#92b115ee] focus:border-[#92b115ee]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#92b115ee] hover:bg-[#71822bee] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-[#92b115ee] ${
                  status === 'sending' ? 'opacity-75 cursor-wait' : ''
                }`}
              >
                Send Message
                <span className="ml-2 mt-1"><TbSend /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
