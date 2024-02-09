import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Footer from "./components/Footer.jsx"

import "./style/Global.css"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture-app/services" element={<Services />} />
        <Route path="/architecture-app/about" element={<About />} />
        <Route path="/architecture-app/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
