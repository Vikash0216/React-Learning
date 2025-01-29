import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navabar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path='/about' element={<About />}/>
        <Route path='/classes' element={<Classes />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route path='/join' element ={<Join />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;