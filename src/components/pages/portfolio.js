import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';

export default function Portfolio() {
  return (
    <div name="portfolio" className="w-full md: h-screen bg-[#8ea8c3]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="pb-8 mt-96">
          <h1 className="font-bold">Some of My Work</h1>
        </div>
        <div>
          <PortfolioCarousel />
        </div>
      </div>
    </div>
  );
}
