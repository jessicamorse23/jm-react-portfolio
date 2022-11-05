import React, { useState } from 'react';
import navbar from './navbar.js';
import header from './header.js';
import footer from './footer.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import portfolio from './pages/portfolio';
// Source code - NU Module 20.13

export default function porfolio() {
  const [pageView, setPageView] = useState('portfolio');

const renderPage = () => {
  if (currentPage === 'portfolio') {
    return <portfolio/>;
  }
  if (currentPage === 'about') {
    return <about/>;
  }
  return <contact/>;
};

const handlePageChange = (page) => setPageView(page);
return (
  <div>
    <header/>
    <navbar pageView={pageView} handlePageChange={handlePageChange} />
    {renderPage()}
    <footer />
  </div>
);
}

