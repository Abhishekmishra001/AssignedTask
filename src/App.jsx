import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import HistorySection from './components/HistorySection';
import ServicesSection from './component/ServicesSection';
// import ContactSection from './components/ContactSection';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import TopSection from './component/TopSection';


    // <div className="bg-black text-white font-sans">
    //   <Navbar />
    //   <HeroSection />
    //   <HistorySection />
    //   <ServicesSection />
    //   <ContactSection />
    //   <Footer />
    // </div>

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-serif flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-60  overflow-y-auto">
        <div className='py-4 font-quicksand px-6 border-b border-gray-700'>Securing Your Flutter App: Best Practices and Techniques  </div>
        <div className=' px-10 py-8'>
          <TopSection />
          <ServicesSection />
          <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}



export default App;