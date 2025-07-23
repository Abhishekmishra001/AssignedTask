import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import "../App.css"

const TopSection = () => {
  return (
    <>
      

    
   <section className="grid grid-cols-1 md:grid-cols-12 gap-10 font-uicksand ">
  <div className="md:col-span-5 flex flex-col justify-center">
    <h2 className="text-4xl font-bold mb-4 font-playfair mt-8">Unlock the Potential<br/>of Flutter</h2>
    <p className="mb-4 text-xl font-light">Your Premier Partner for Cross-Platform App Excellence!</p>
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full w-max mb-10 font-uicksand font-semibold text-sm">
      UPGRADE YOUR TECH
    </button>
    
  </div>
 

  <div className="md:col-span-7 relative rounded overflow-hidden shadow-lg ">
  <div className='w-[80%] code-container'>


  <img
    src="/Images/Group.png"
    alt="Code example"
    className="object-cover code-image "
  />
    </div>
</div>

</section>
<div className='flex justify-between mt-[90px] gap-6'>
<div>
      <h3 className="text-2xl font-semibold font-playfair">Flutter's <br/>Dawn</h3>
      <p>History of flutter</p>
      </div>
      <p className="text-sm mb-6 max-w-md leading-6">
       Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey!
       <a href="#" className="text-cyan-500 none"> Click to begin!</a>
      </p>
      <div className='flex items-end'>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full w-max h-auto flex items-center gap-2 font-uicksand text-sm mb-8">
        BEGIN <MdArrowOutward/>
      </button>
      </div>
    </div>
    </>
  );
};

export default TopSection;
