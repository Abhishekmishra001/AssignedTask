import React from 'react';
import '../App.css'

const ServicesSection = () => {
  return (
    <section className="my-16 ">
    <div className='flex flex-col items-center'>
      <h3 className="text-center text-3xl font-semibold mb-3 font-playfair">Our Dynamic Services Suite!</h3>
      <p className="text-center text-sm text-gray-400 mb-8 font-uicksand">
       Embrace Innovation: Let's Create Together!
      </p>
         <p className="text-center text-sm text-gray-400 mb-8 font-uicksand w-3xl">
       Step into innovation! Explore our range of services and let's create something extraordinary together. Your vision, our expertise. Let's begin!
      </p>
      </div>
     <div className="flex flex-col md:flex-row md:items-stretch md:justify-between h-auto">
  <ul className="text-lg md:mb-0 w-[65%]">
  <div className='flex justify-between text-3xl font-semibold mb-3 font-playfair'>
    <h3 className="text-3xl font-semibold mb-3 font-playfair">Flutter App Development</h3> <span>-</span></div>
    <p className="text-sm mb-6 w-[80%]">
      Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience?  
      <a href="#" className="text-cyan-500">Let's get started today!</a>
    </p>
    {[
      "UI/UX Design",
      "Customization & Integration",
      "Testing & Quality Assurance",
      "Maintenance & Support",
      "Consulting & Training",
      "Migration & Upgrades"
    ].map((service, index) => (
      <li key={index} className="cursor-pointer border-b border-gray-700  flex justify-between text-xl py-4">
        <span>{service}</span>
        <span>+</span>
      </li>
    ))}
  </ul>

 <div className=" rounded-lg ml-10">
    {/* Background image div */}
    <img
    src='/Images/laptop.png'
    className='cover'
    />
  </div>
</div>

    </section>
  );
};

export default ServicesSection;
