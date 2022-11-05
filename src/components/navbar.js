import React from "react";
// after adding css - import stylesheet
// source for code from NU Module 20.13 

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar navbar-expand-lg bg-light">
      <li className="nav-item"><a href="#portfolio" onClick={() => handlePageChange('portfolio')}
      className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
      <li className="nav-item">
        <a href="#about" onClick={() => handlePageChange("about")} className={currentPage === "about" ? "nav-link active" : "nav-link"}>About Me</a>
      </li>
      <li className="nav-item"> <a href="#contact" onClick={() => handlePageChange("contact")} className={currentPage === "contact" ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
    </ul>
  )
}
export default Navbar;