import React, { useState } from "react";
import '../App.css';

const Sidebar = () => {
  const navList = ['App Development', 'Challenges', 'Hire Developer', 'Community'];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-800 text-white p-1 rounded "
        >
          ☰
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-screen w-60 font-quicksand bg-black border-r border-gray-700 flex flex-col p-4 justify-between z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-12">
          <div className="flex justify-center mt-4">
            <img src="/Images/Logo.png" alt="logo" className="mb-6" />
          </div>
          <nav className="flex flex-col space-y-4 text-sm">
            <button className="conic-border-button py-4 mb-8 text-white hover:bg-green-700 transition">
              <span className="my-6">CONTACT US</span>
            </button>
            {navList.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-green-400 transition text-[16px]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="py-2 mb-4">
          <img
            src="/Images/Rectangle.png"
            alt="Sidebar Visual"
            className="mb-2 w-full"
          />
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
