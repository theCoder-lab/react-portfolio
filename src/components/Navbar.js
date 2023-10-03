import React from 'react'
import { useEffect } from 'react'
import $ from 'jquery';

function Navbar() {

  useEffect(()=>{
    $("#hidden-menu").hide();
    $("#menu-toggle").on("click", function () {
        $("#hidden-menu").toggle(200);
        $('.line').toggleClass('line-close');
    });
        // Cleanup the event listener when the component unmounts
        return () => {
          $("#menu-toggle").off("click");
        };
  }, []);

  return (
    <>
        <div id="hidden-menu" className="hidden-menu">
        <div className="container">

                <a href="#home">Home</a>    
                <a href="#projects">Projects</a>   
                <a href="#skills">Skills</a>  
                <a href="#about">About</a>   
                <a href="#contact">Contact</a>   

        </div>
        </div>
        <nav>
            <div className="container">
                <img src="./img/logo-no-cr.png" alt="logo" />
                <div className="box">
                    
                <a href="#projects">Projects</a>   
                <a href="#skills">Skills</a>   
                <a href="#about">About</a>
                <a href="#contact">Contact</a> 
                <a id="menu-toggle">
                <div className="line"></div>
                </a>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar