import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdPhoneIphone} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>clayton.hiebert1@gmail.com</h5>
            <a href="mailto:clayton.hiebert1@gmail.com">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Clayton Hiebert</h5>
            <a href="https://www.linkedin.com/in/clayton-hiebert/">Send a message</a>
          </article>

          <article className="contact__option">
            <MdPhoneIphone/>
            <h4>Cell</h4>
            <h5>+18176815662</h5>
            <a href="tel:/+18176815662">Call or text me</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
      <form action=""></form>
      </div>
    </section>
  )
}

export default Contact