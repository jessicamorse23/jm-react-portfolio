import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// source for code from NU Module 20.13 

function Navbar({ currentPage, handlePageChange }) {
  return (
      <Row className="p-3">
        <Col>
          <li className="nav-item"><a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
        </Col>
        <Col>
          <li className="nav-item">
            <a href="#About" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>About Me</a>
          </li>
        </Col>
        <Col>
        <li className="nav-item"> <a href="#Contact" onClick={() => handlePageChange("Contact")}className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
        </Col>
      </Row>

  )
}
export default Navbar;