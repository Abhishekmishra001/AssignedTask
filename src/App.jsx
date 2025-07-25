
import React from 'react';
import ServicesSection from './component/ServicesSection';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import TopSection from './component/TopSection';

function App() {
  return (
    <div className="bg-black text-white font-serif">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="md:w-60 w-full z-10 md:fixed md:top-0 md:left-0">
          <Sidebar />
        </div>

        <div className="flex-1 md:ml-60 w-full overflow-auto">
          <div className="py-4 font-quicksand px-4 md:px-6 border-b border-gray-700 text-sm md:text-base">
            Securing Your Flutter App: Best Practices and Techniques
          </div>

          <div className="px-4 md:px-10 py-8">
            <TopSection />
            <ServicesSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;