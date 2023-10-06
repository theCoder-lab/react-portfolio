import React, { useEffect } from 'react'
import { useState } from 'react'
/* import $ from 'jquery'; */

function Navbar() {

  const [toggleClass, setToggleClass] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleClicked = (e) => {
    e.preventDefault();
    if(!toggleClass){

      setToggleClass(true);
      setShowMenu(true);
    }else{
      setToggleClass(false);
      setShowMenu(false);
    }
  }
  ////////////////////////////////////////////////

  const [navColor, setNavColor] = useState(false);

  useEffect(()=>{

    const triggerOnScroll = () => {
  
        if(window.scrollY >= 100){
            setNavColor(true);
        } else{
            setNavColor(false);
        }
    }
  
    window.addEventListener('scroll', triggerOnScroll);

    return ()=>{
      window.removeEventListener('scroll', triggerOnScroll);
    }

  }, []);


/*   useEffect(()=>{
    $("#hidden-menu").hide();
    $("#menu-toggle").on("click", function () {
        $("#hidden-menu").toggle(200);
        $('.line').toggleClass('line-close');
    });
        // Cleanup the event listener when the component unmounts
        return () => {
          $("#menu-toggle").off("click");
        };
  }, []); */

  return (
    <>
      
          <div 
            id="hidden-menu" 
            /* style={{display: !showMenu ? 'none': 'block'}}  */
            className={`hidden-menu ${showMenu ? 'show' : ''}`} 
          >
          <div className="container">

                  <a href="#home">Home</a>    
                  <a href="#projects">Projects</a>   
                  <a href="#skills">Skills</a>  
                  <a href="#about">About</a>   
                  <a href="#contact">Contact</a>   

          </div>
          </div>

        <nav className={navColor ? 'scroll': ''}>
            <div className="container">
                <img src="./img/logo-no-cr.png" alt="logo" />
                <div className="box">
                    
                <a href="#projects">Projects</a>   
                <a href="#skills">Skills</a>   
                <a href="#about">About</a>
                <a href="#contact">Contact</a> 
                <p id="menu-toggle" onClick={toggleClicked} >
                <button type='submit' className={!toggleClass ? 'line' : 'line-close'}></button>
                </p>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar