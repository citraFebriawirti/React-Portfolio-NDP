import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
  useEffect(() => {
    AOS.init(
    
    );
  }, [])
  return (
    <div>
      <div id='' className="my-10">
          <h1 className='text-center text-2xl font-bold '>Project</h1>
          <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700" />
          <div className="py-4 mx-32 grid grid-cols-1  lg:grid-cols-2 ">
          <div className="shadow-lg  mb-10 group container rounded-md bg-white  max-w-sm flex justify-center items-center mx-auto content-div" data-aos="fade-right"  data-aos-duration="1000">
              <div>
                  <div className="py-8 px-4 bg-white rounded-b-md fd-cl group-hover:opacity-25">
                      <img src="../image/port1.jpg" alt="" />
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Personal Website With HTML & CSS</span>
                  <span  className="block text-gray-600 text-sm">Personal web contains personal data both description, education and experience.
                  </span>
              </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
            <span className="text-sm font-bold  tracking-wider leading-relaxed font-sans text-teal-800">Personal Website With HTML & CSS</span> 
            <div className="pt-8 text-center">
                <a href="https://citrafebriawirti.github.io/Personal-Website/"  target="_blank" className="text-center rounded-lg p-2 bg-teal-600  text-gray-700 font-bold text-lg">View</a>
                </div>
          </div>
          </div>
          <div className="shadow-lg mb-10 group container  rounded-md bg-white max-w-sm flex justify-center items-center  mx-auto content-div" data-aos="fade-left"  data-aos-duration="1000">
              <div>
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <img src="../image/port2.jpg" alt="" />
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Landing Page LandCo</span>
                  <span  className="block text-gray-600 text-sm">LandCo is a landing page about the LandCo community profile.
                  </span>
              </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
            <span className="text-sm font-bold  tracking-wider leading-relaxed font-sans text-teal-800">Landing Page LandCo</span> 
            <div className="pt-8 text-center">
                <a href="https://citrafebriawirti.github.io/LandCo_Landing-Page/"  target="_blank" className="text-center rounded-lg p-2 bg-teal-600  text-gray-700 font-bold text-lg">View</a>
                </div>
          </div>
          </div>
          <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div" data-aos="fade-right"  data-aos-duration="1000">
              <div>
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <img src="../image/port3.jpg" alt="" />
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Aplikasi BookSelf</span>
                  <span  className="block text-gray-600 text-sm">Bookself is an application that provides a mini book library with a bookshelf.
                  </span>
              </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
            <span className="text-sm font-bold  tracking-wider leading-relaxed font-sans text-teal-800">Aplikasi BookSelf</span> 
            <div className="pt-8 text-center">
                <a href="https://citrafebriawirti.github.io/Aplikasi-BookSelf-Dicoding/"  target="_blank" className="text-center rounded-lg p-2 bg-teal-600  text-gray-700 font-bold text-lg">View</a>
                </div>
          </div>
          </div>
          <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div" data-aos="fade-left"  data-aos-duration="1000">
              <div>
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                      <img src="../image/port4.jpg" alt="" />
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">Gallery Photos</span>
                  <span  className="block text-gray-600 text-sm">App for all photos that are arranged automatically
                  </span>
              </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
            <span className="text-sm font-bold  tracking-wider leading-relaxed font-sans text-teal-800">Gallery Photos</span> 
            <div className="pt-8 text-center">
                <a href="https://gallery-photos-citrafebriawirti.netlify.app/"  target="_blank" className="text-center rounded-lg p-2 bg-teal-600  text-gray-700 font-bold text-lg">View</a>
                </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}
