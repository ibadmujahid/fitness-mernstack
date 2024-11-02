import axios from "axios";
import { Link } from 'react-router-dom';
import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

import Header from './header';
import Footer from './footer';


function Contact()
{
    const [name,setname]= useState('');
    const [email,setemail]= useState('');
    const [subject,setsubject]= useState('');
    const [message,setmessage]= useState('');



    const contactrecord = () =>
    {


        const service_id = 'service_bd3cjfi';
        const template_id = 'template_zbgc6wk';
        const public_key = 'N4OtW6IueKBpzHhcf';
    
        const template_params = {
            name : name,
            email :email,
            subject :subject,
            to_name : "Ibad",
            message : message
        }
    
        emailjs.send(service_id,template_id,template_params,public_key).then((response)=>
        console.log('email sent successfully!'));


      
    }
    return(
        <div>

<Header/>

   
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact Us</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Contact Us</p>
            </div>
        </div>
    </div>
   
    <div class="container pt-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Get In Touch</h4>
            <h4 class="display-4 font-weight-bold">Email Us For Any Query</h4>
        </div>
        <div class="row px-3 pb-2">
            <div class="col-sm-4 text-center mb-3">
                <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                <h4 class="font-weight-bold">Address</h4>
                <p>123 Street, New York, USA</p>
            </div>
            <div class="col-sm-4 text-center mb-3">
                <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                <h4 class="font-weight-bold">Phone</h4>
                <p>+012 345 6789</p>
            </div>
            <div class="col-sm-4 text-center mb-3">
                <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                <h4 class="font-weight-bold">Email</h4>
                <p>info@example.com</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 pb-5">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" width="100%" height="300px"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="col-md-6 pb-5">
                <div class="contact-form">
                    <div id="success"></div>
                   
                        <div class="control-group">
                            <input type="text" class="form-control" id="name"
                             placeholder="Your Name" required="required" value={name}  onChange={(e)=>setname(e.target.value)}
                               />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="email" class="form-control" id="email" 
                            placeholder="Your Email" required="required" value={email} onChange={(e)=>setemail(e.target.value)}
                              />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control" 
                            id="subject" placeholder="Subject" value={subject} required="required" onChange={(e)=>setsubject(e.target.value)}
                            />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea class="form-control" rows="6" 
                            id="message" placeholder="Message" value={message} required="required"  onChange={(e)=>setmessage(e.target.value)}
                           ></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary"
                             type="submit" onClick={contactrecord}>Send Message</button>
                        </div>
                
                </div>
            </div>
        </div>
    </div>
    
    <Footer/>

        </div>
    )
}

export default Contact;