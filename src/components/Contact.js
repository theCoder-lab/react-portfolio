import React from 'react'
import { FaPhone, FaAt, FaGlobe, FaGithub, FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
        <section className="contact" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="container">
            
            <div className="socials">
                <div className="wrapper">
                    <FaPhone className='contact-icon' />
                    <span>
                        +4916677889999
                    </span>
                </div>
                <div className="wrapper">
                    <FaAt className='contact-icon' />
                    <span>
                        johndoe@muster.com
                    </span>
                </div>
                <div className="wrapper">
                    <FaGlobe className='contact-icon' />
                    <span>
                        http://www.johndoe.com
                    </span>
                </div>
                <div className="wrapper">
                    <FaGithub className='contact-icon' />
                    <span>
                        http://github.com/johndoe
                    </span>
                </div>
                <div className="wrapper">
                    <FaLocationDot className='contact-icon' />
                    <span>
                        Karlmarx Str. 66, 13367 Muster Stadt
                    </span>
                </div>
            </div>
            <div className="box">
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Your Email" required />
                <input type="text" placeholder="Your Phone" required />
                <textarea placeholder="Tell Me About Your Needs" required></textarea>
                <button>Send</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact