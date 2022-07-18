import './App.css';
import Navbar from './components/Navbar';
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"
import React from 'react'

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </>
      <header className="App-header">
      </header>
    </div>
  );
}


export default App;
