import React from 'react';
import '../App.css';

const ServicesSection = () => {
  return (
    <section className="my-16 px-4 md:px-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-3xl font-semibold mb-3 font-playfair">
          Our Dynamic Services Suite!
        </h3>
        <p className="text-sm text-gray-400 mb-3 font-quicksand">
          Embrace Innovation: Let's Create Together!
        </p>
        <p className="text-sm text-gray-400 mb-8 font-quicksand max-w-2xl">
          Step into innovation! Explore our range of services and let's create something extraordinary together.
          Your vision, our expertise. Let's begin!
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-start gap-8">
        <ul className="w-full md:w-[60%]">
          <div className="flex justify-between items-center text-2xl font-semibold mb-4 font-playfair">
            <h3 className="">Flutter App Development</h3>
            <span>-</span>
          </div>
          <p className="text-sm mb-6 text-gray-300">
            Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications
            for any platform – faster and easier than ever before.
            Ready to revolutionize your app experience?
            <a href="#" className="text-cyan-500"> Let's get started today!</a>
          </p>

          {[
            "UI/UX Design",
            "Customization & Integration",
            "Testing & Quality Assurance",
            "Maintenance & Support",
            "Consulting & Training",
            "Migration & Upgrades"
          ].map((service, index) => (
            <li key={index} className="cursor-pointer border-b border-gray-700 flex justify-between text-base py-4">
              <span>{service}</span>
              <span>+</span>
            </li>
          ))}
        </ul>

        <div className="w-full md:w-[40%]">
          <img
            src="/Images/laptop.png"
            alt="Laptop illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
