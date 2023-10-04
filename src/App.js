import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    <div>
      <Helmet>
      <title>React Portfolio Page</title>
      </Helmet>
    </div>

    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Footer />
    <DarkMode />

    </>
  );
}

export default App;
