import React from "react";
import Profile from "./../../assets/Profile__Image.png";
import { FiSend } from "react-icons/fi";
import { CiDesktopMouse2 } from "react-icons/ci";

function Hero() {
  const handleScroll = () => {
    const next = document.getElementById("about") || document.querySelector("section:nth-of-type(2)");
    if (next) {
      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight : 0;
      const top = next.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-center items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-28 sm:pt-36 lg:pt-40 pb-10">
          {/* Left column */}
          <div className="text-start md:text-left" data-aos="fade-up">
            <p className="text-white font-medium mb-2">Hi, I am</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#92b115ee] leading-tight">
              Abd Ellatif
            </h1>
            <p className="mt-3 inline-block text-white font-semibold py-1 rounded-md">
              Frontend developer
            </p>

            <p className="mt-6 text-white max-w-xl">
              I create beautiful, responsive, and user-friendly web applications with modern
              technologies. Passionate about clean code, pixel-perfect designs, and exceptional
              user experiences.
            </p>

            <div className="inline-block mt-8">
              <a
                href="#contact"
                className="flex items-center justify-center md:justify-start gap-2 bg-[#92b115ee] text-white px-6 py-3 rounded-md shadow hover:bg-[#71822bee] transition"
              >
                <span>Contact Me</span>
                <FiSend />
              </a>
            </div>
          </div>

          {/* Right column - image */}
          <div className="flex justify-center md:justify-end" data-aos="fade-left">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl bg-[#71822bee] hidden sm:block">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={handleScroll}
          className="p-2 rounded-full border-2 border-[#92b115ee] text-white hover:bg-[#92b115ee] hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll to next section"
        >
          <CiDesktopMouse2 className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default Hero;

