import React, { useEffect } from 'react'
import $ from 'jquery';
import { VscCode, VscGlobe, VscTools, VscAccount } from "react-icons/vsc";


function About() {

    useEffect(()=>{


        
        let nums = $('.box .num');
        let aboutSection = $('.about');
        let started = false;
    
        // Count function
        function startCount(el) {
            let goal = el.data('goal');
            let count = setInterval(function() {
              let currentValue = parseInt(el.text());
              if (currentValue < goal) {
                el.text(currentValue + 1);
              } else {
                clearInterval(count);
              }
            }, 2000 / goal);
          }
          
    
        $(window).on('scroll', function(){

    
            // Count implementation
            if ($(window).scrollTop() >= aboutSection.offset().top + 400) {
                if (!started) {
                nums.each(function() {
                    startCount($(this));
                });
                }
                started = true;
            }
        });
    
    
    },[]);

  return (
    <>
        <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="container">
            <img loading="lazy"  src="img/avatar-04.png" alt="ava" />
            <div className="box">
            
              
                <div className="about-text">
                    <h3>John Doe</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deserunt libero, aspernatur ex iure consequatur.
                        sit amet consectetur adipisicing elit. Eligendi deserunt libero, aspernatur ex iure consequatur.
                    </p>
                </div>

            </div>
       
       

        <div className="count">
            <div className="box">
                <VscCode className='count-icon'/>
                <h3 className="num" data-goal="100">0</h3>
                <span>Projects</span>
            </div>
            <div className="box">
                <VscAccount className='count-icon'/>
                <h3 className="num" data-goal="120">0</h3>
                <span>Clients</span>
            </div>
            <div className="box">
                <VscTools className='count-icon'/>
                <h3 className="num" data-goal="50">0</h3>
                <span>Tasks</span>
            </div>
            <div className="box">
                <VscGlobe className='count-icon'/>
                <h3 className="num" data-goal="80">0</h3>
                <span>Countries</span>
            </div>
        </div>

        
    </div>
    </section>
    </>
  )
}

export default About