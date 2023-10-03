import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery';
import { FaRegCircleUp } from "react-icons/fa6";

function Footer() {

useEffect(()=>{

    let nums = $('.box .num');
    let aboutSection = $('.about');
    let started = false;

    let section = $('.skills');
    let spans = $('.progress span');

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

        let sectionOffset = $("#section-offset").offset().top;
        let scrollPosition = $(window).scrollTop();

        if(scrollPosition > 100){
            $('nav').css({ background: 'var(--section-gray)', opacity: '0.8',backdropFilter: 'blur(10px)'});
            $('#goUp').fadeIn(1000);
           
        }else{
            $('nav').css({background: 'var(--section-gray)', opacity: '1'});
            $('#goUp').fadeOut(1000);
            
        }


        // Progress function
        if ($(window).scrollTop() >= section.offset().top) {
            spans.each(function() {
            $(this).css('width', $(this).data('width'));
            });
        }

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
        <footer>
        <div className="container">
            <div className="container">
                <div className="box">
                    <p>All Rights Reserved &copy;2023 - Developed Jan Darwish</p>
                </div>
            </div>
        </div>
    </footer>
    <a id="goUp" href="#top" className="goUp">
        <FaRegCircleUp className='goUp-icon' />
    </a>
    <div id="modeBtn" className="modeBtn"></div>  
    
    </>
  )
}

export default Footer