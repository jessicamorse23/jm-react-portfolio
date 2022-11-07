import React from 'react';
// import PortfolioCarousel from './PortfolioCarousel';
import { Projects } from './projects/Projects';
import ProjectCont from './projects/ProjectCont';

export default function Portfolio() {
  return (
    <div id="portfolio" className="d-flex justify-content-center">
      <div className="justify-content-center" id="portfolio">
        <h1 className="p-3 font-bold">A Portfolio of Projects</h1>
        <div>
          {/* <PortfolioCarousel /> */}
        </div>
        <div className="card-container">
          {Projects.map((project, index) => (
            <ProjectCont project={project} key={`${project.name}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
