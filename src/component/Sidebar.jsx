import React from "react";
import '../App.css';

const Sidebar = () => {
  const navList = ['App Development', 'Challenges', 'Hire Developer', 'Community'];

  return (
    <aside className="w-60 font-quicksand bg-black border-r border-gray-700 flex flex-col p-4 justify-between h-screen fixed top-0 left-0">
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
              href="#app-development"
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
  );
};

export default Sidebar;