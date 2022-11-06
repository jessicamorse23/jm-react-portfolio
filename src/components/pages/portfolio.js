import React from 'react';
import "../styles/portfolio.css";
import PortfolioCarousel from './PortfolioCarousel';
import PlaylistProducer from '../../assets/PlaylistProducer.png';


export default function Portfolio() {
  return (
    <div name="portfolio" className="w-full md:h-screen" id="portfolio">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-96">
          <h1 className="font-bold">Some of My Work</h1>
        </div>
        <div >
          <PortfolioCarousel />
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div style={{ backgroundImage: `url(${PlaylistProducer})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        </div>
      </div>
    </div>
    </div>
  );
}
