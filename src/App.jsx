import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Inspiration from "./components/inspiration.jsx"
import Modal from "./components/Modal.jsx"
import Footer from "./components/Footer.jsx"

import "./style/Global.css"
import Contactmodal from './components/Modal.jsx';


function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/architecture-app/services/*" element={<Services />} />
      <Route path="/architecture-app/inspiration" element={<Inspiration />} />
      <Route path="/architecture-app/about" element={<About />} />
      <Route path="/architecture-app/contact" element={<Contact />} />
    </Routes>
    <Contactmodal />
    <Footer />
  </Router>
  )
}

export default App
