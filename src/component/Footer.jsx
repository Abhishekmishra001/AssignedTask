import React from "react";
import '../App.css'

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
      <div className="md:col-span-6 flex flex-col justify-between">
        <nav className=" flex justify-around py-4">
          <a href="#" className="hover:text-cyan-400">
            Events
          </a>
          <a href="#" className="hover:text-cyan-400">
            Gen AI
          </a>
          <a href="#" className="hover:text-cyan-400">
            Careers
          </a>
          <a href="#" className="hover:text-cyan-400">
            Case study
          </a>
          <a href="#" className="hover:text-cyan-400">
            SME Talks
          </a>
        </nav>

       <div>
        <h1 className="font-uicksand text-3xl ">For any collaborative projects or enquiries feel free to connect with us.</h1>
        <h1 className="font-uicksand text-3xl mb-10 mt-4">vayuz.com</h1>
       </div>
        
        </div>
        <div className="md:col-span-2"></div>
        <div className="md:col-span-4">
          <h1 className="text-6xl font-bold text-end font-playfair">
            Connect<br/> With Us
          </h1>
          <div className="w-full">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border-b-2 border-white bg-transparent focus:outline-none"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 bg-[#08A7CE66] border border-[#08A7CE] mt-4 text-white p-2 rounded-full hover:bg-cyan-600"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center items-center p-10 space-y-6 md:space-y-0 md:space-x-20">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold">Connect With Us</h1>
              <p className="mt-4 text-lg">For any collaborative projects or enquiries feel free to connect with us.</p>
              <p className="mt-2 text-2xl">vayuz.com</p>
            </div>
         
          </div> */}

      <footer className="flex gap-8 mt-10">
        <a href="#" className="hover:text-cyan-400">
          About
        </a>
        <a href="#" className="hover:text-cyan-400">
          Insights
        </a>
        <a href="#" className="hover:text-cyan-400">
          Community
        </a>
        <a href="#" className="hover:text-cyan-400">
          Privacy & Policies
        </a>
      </footer>
    </div>
  );
};

export default Footer;
