import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
      </div>
  );
}

export default App;
