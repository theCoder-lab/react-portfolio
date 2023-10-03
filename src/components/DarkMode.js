import React, { useState, useEffect } from 'react'
import { FaMoon, FaRegSun } from "react-icons/fa6";


function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {

        setDarkMode(!darkMode);
        localStorage.setItem('mode', darkMode ? 'light' : 'dark');
    }

    useEffect(()=>{
        const localMode = localStorage.getItem('mode');
        if(localMode === 'dark'){
            setDarkMode(true);
        }
    }, []);

      // Function to enable dark mode styles
  const enableDarkMode = () => {
    document.documentElement.style.setProperty('--white', '#eaeaea');
    document.documentElement.style.setProperty('--dark-gray', '#fff');
    document.documentElement.style.setProperty('--light-gray', '#efefef');
    document.documentElement.style.setProperty('--paragraph-gray', '#eaeaea');
    document.documentElement.style.setProperty('--projects-paragraph', '#333');
    document.documentElement.style.setProperty('--section-gray', '#333');
    document.documentElement.style.setProperty('--contact-links-gray', '#333');
  };

  // Function to enable light mode styles
  const enableLightMode = () => {
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--dark-gray', '#333');
    document.documentElement.style.setProperty('--light-gray', '#777');
    document.documentElement.style.setProperty('--paragraph-gray', '#555');
    document.documentElement.style.setProperty('--projects-paragraph', '#777');
    document.documentElement.style.setProperty('--section-gray', '#efefef');
    document.documentElement.style.setProperty('--contact-links-gray', '#333');
  };

  useEffect(()=>{
    if (darkMode) {
        enableDarkMode();
        localStorage.removeItem('light');
    } else{
        enableLightMode();
        localStorage.removeItem('dark');
    }

  }, [darkMode]);

  return (
    <div className="modeBtn">
        <button 
            data-mode={ darkMode ? 'light' : 'dark' }
            onClick={toggleMode}
        >
            {
                darkMode ? <FaRegSun className='mode-logo' />: 
                           <FaMoon className='mode-logo' />
            }
        </button>
    </div>
  )
}

export default DarkMode