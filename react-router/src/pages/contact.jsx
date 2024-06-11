import React from 'react';
import "../index.css";
import phone from "../assets/phone_icon.png";
import email from "../assets/email_icon.png";
import location from "../assets/location_icon.png";

const contactPage = () => {
  return (
    <section id="container">
      <div className='contact-form'>
        <h2>Get in touch</h2>
        <form>
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter a valid email address" required />
          <textarea placeholder="Enter your message" className='message' required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      
      <div className='box'>
        <div className="1">
          <img src={phone} alt="" className="boximg"/>
          <div className="boxtext">
            <h3>Phone</h3>
            <p>+2347081400264 <br/> +2348107721184</p>
          </div>
        </div>

        <div className="2">
          <img src={email} alt="" className="boximg"/>
          <div className="boxtext">
            <h3>Email</h3>
            <p>bennywave21@gmail.com</p>
          </div> 
        </div>

        <div className="3">
          <img src={location} alt="" className="boximg"/>
          <div className="boxtext">
            <h3>Location</h3>
            <p>Presidential Road,Enugu, Nigeria</p>
          </div>     
        </div>
      </div>
    </section>
    
  )
}

export default contactPage;