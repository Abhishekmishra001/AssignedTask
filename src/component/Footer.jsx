import React from "react";
import '../App.css';

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col p-4 md:p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6 flex flex-col space-y-6">
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-cyan-400">Events</a>
            <a href="#" className="hover:text-cyan-400">Gen AI</a>
            <a href="#" className="hover:text-cyan-400">Careers</a>
            <a href="#" className="hover:text-cyan-400">Case study</a>
            <a href="#" className="hover:text-cyan-400">SME Talks</a>
          </nav>

          <div className="text-center md:text-left">
            <h1 className="font-quicksand text-xl md:text-3xl leading-snug">
              For any collaborative projects or enquiries feel free to connect with us.
            </h1>
            <h1 className="font-quicksand text-2xl md:text-3xl mt-2 text-cyan-400">vayuz.com</h1>
          </div>
        </div>

      
        <div className="md:col-span-2 hidden md:block"></div>

        <div className="md:col-span-4 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center md:text-right">
            Connect<br className="hidden md:block"/> With Us
          </h1>

          <form className="space-y-4 w-full">
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
                className="px-6 bg-[#08A7CE66] border border-[#08A7CE] mt-4 text-white p-2 rounded-full hover:bg-cyan-600"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="flex flex-wrap justify-center gap-4 border-t border-gray-700 pt-6 text-sm">
        <a href="#" className="hover:text-cyan-400">About</a>
        <a href="#" className="hover:text-cyan-400">Insights</a>
        <a href="#" className="hover:text-cyan-400">Community</a>
        <a href="#" className="hover:text-cyan-400">Privacy & Policies</a>
      </footer>
    </div>
  );
};

export default Footer;
