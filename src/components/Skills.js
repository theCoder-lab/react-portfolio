import React, { useEffect } from 'react'
import $ from 'jquery';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaReact } from "react-icons/fa6";


function Skills() {

    useEffect(()=>{
    
        let section = $('.skills');
        let spans = $('.progress span');
    
    
        $(window).on('scroll', function(){
    
    
            // Progress function
            if ($(window).scrollTop() >= section.offset().top) {
                spans.each(function() {
                $(this).css('width', $(this).data('width'));
                });
            }
    
 
        });
    
    
    },[]);

  return (
    <>
        <section className="skills" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="container">
            <div className="box" data-aos="zoom-in">
                
                <FaHtml5 className="skill-icon" />
                <div className="title">
                    <h3>HTML</h3><span>95%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="95%"></span>
                </div>
            </div>
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
                
                <FaCss3Alt className="skill-icon" />
                <div className="title">
                    <h3>CSS</h3><span>90%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="90%"></span>
                </div>
            </div>
            <div className="box" data-aos="zoom-in" data-aos-delay="600">
                
                <FaJs className="skill-icon" />
                <div className="title">
                    <h3>Java Script</h3><span>80%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="80%"></span>
                </div>
            </div>
            <div className="box" data-aos="zoom-in" data-aos-delay="900">
                
                <FaNodeJs className="skill-icon" />
                <div className="title">
                    <h3>NODE JS</h3><span>75%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="75%"></span>
                </div>
            </div>
            <div className="box" data-aos="zoom-in" data-aos-delay="1200">
                
                <FaDatabase className="skill-icon" />
                <div className="title">
                    <h3>MySQL</h3><span>85%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="85%"></span>
                </div>
            </div>
            <div className="box" data-aos="zoom-in" data-aos-delay="1500">
                
                <FaReact className="skill-icon" />
                <div className="title">
                    <h3>REACT JS</h3><span>75%</span>
                </div>
                <div className="progress">
                    <span style={{width: 0}} data-width="75%"></span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills