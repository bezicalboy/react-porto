/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './index.css';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from './components/Skill';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0px 71px;

  @media (max-width: 991px) {
    padding: 25px 20px;
  }
`;

export default App;
