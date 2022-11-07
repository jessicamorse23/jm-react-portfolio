import React from 'react';

// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Portfolio from './components/pages/Portfolio';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Header from './components/Header'
// import Footer from './components/Footer'
import PortfolioStart from "./components/PortfolioStart";


const App = () => <PortfolioStart />;

export default App;
// Source code - NU Module 20.13

// const App = () => (
//   <>
//     <Router>
//       <Header />
//       <Navbar />
//       <Routes>
//         <Route path="/" exact element={<Portfolio />}></Route>
//         <Route path="/about" exact element={<About />}></Route>
//         <Route path="/contact" exact element={<Contact />}></Route>
//       </Routes>
//       <Footer />
//     </Router>
//   </>
// );

// export default App;
// I have left in the comments because in the future, I would like to use the routes for this portfolio and I know they're working
