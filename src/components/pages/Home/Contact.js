import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import'./style/contact.scss'


const Contact = ()=>{
    return (
        <div id="contact" className="Contact">
            <h3>Contact Me</h3>
        <div className="Contactinline">
        <div className="ContactDesc">
            <h5>
                Here Your can Contact me And talk about your Project
            </h5>
            <h5>(+838)00 000 000</h5>
            <h5>contact@developer.com</h5>
            <h5>lokacion :Kosovo, Skenderaj....</h5>


        </div>
        <div className="ContactForm">

        
            <form action="mailto:endritaliu09@gmail.com" className="form">
            
                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" name="EmailFrom" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="Subjekt" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="comment"></textarea>
                </div>

                <button className="btn">Send</button>

            </form>
        </div>
        </div>
        </div>
    )
}

export default Contact;