import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
// Source code - NU Module 20.13

export default function PortfolioStart() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

const renderPage = () => {
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Contact')
  return <Contact />;

};
const handlePageChange = (page) => setCurrentPage(page);
return (
  <div className='overall-container'>
    <Header />
    <Navbar pageView={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer />
  </div>
);
}