import React from 'react'

function Hero() {
  return (
    <>
        <header id="home">
        <div className="container">
            <img data-aos="slide-right" src="./img/person-2-no.png" alt="person" />
            <div className="box">
                <h1 data-aos="zoom-in-down" data-aos-delay="500">Coding <span>Is My Profition</span></h1>
                <p  data-aos="zoom-in-up" data-aos-delay="900">
                    Let's turn your idea into real world project.
                    Clean code, heigh performance and quality are garantied.
                </p>   
                <a data-aos="zoom-in-up" data-aos-delay="1000" href="#">Get In Touch</a>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default Hero