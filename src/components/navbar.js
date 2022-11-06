import React from "react";
import "./styles/navbar.css";
// source for code from NU Module 20.13 

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar navbar-expand-lg nav-pills nav-fill bg-[#cbf7ed]">
      <li className="nav-item"><a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
      className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
      <li className="nav-item">
        <a href="#About" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>About Me</a>
      </li>
      <li className="nav-item"> <a href="#Contact" onClick={() => handlePageChange("Contact")}className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
    </ul>
  )
}
export default Navbar;