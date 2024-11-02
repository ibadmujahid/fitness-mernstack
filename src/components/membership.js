import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Header from './header';
import Footer from './footer';



function MemberShip()
{

    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [phone,setphone]= useState('')
    const [pack,setpackage]= useState('')
    const [branch,setbranch]= useState('')
    const [subject,setsubject]= useState('')
    const [message,setmessage]= useState('')

const addmember = () =>
{

    if(name == "")
  {
      Swal.fire({
          title: "Validation Message",
          text: "Name Field is Required*",
          icon: "wrong"
        });
  }
  else if(email == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Email Field is Required*",
          icon: "wrong"
        });
  } 
  else if(!email.includes('@') )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Wrong Email Syntax*",
          icon: "wrong"
        });
  } 
  else if(phone == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Phone Field is Required*",
          icon: "wrong"
        });
  }  else if(pack == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Pack Field is Required*",
          icon: "wrong"
        });
  } 
  else if(branch == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Branch name is Required*",
          icon: "wrong"
        });
  }  else if(subject == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Subject Field is Required*",
          icon: "wrong"
        });
  } 
  else if(message == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Message Field is Required*",
          icon: "wrong"
        });
  } 
  else {
      
    axios.post('http://localhost:4000/addmember',{name,email,phone,pack,branch,subject,message})
    
  }

}



    return(
        <div>

<Header/>

    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Membership</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Membership</p>
            </div>
        </div>
    </div>
   
  

    <div className='container'>
        <input type='text' placeholder='Full Name' onChange={(e)=>setname(e.target.value)} className='form-control mt-3'/>
        <input type='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)} className='form-control mt-3'/>
        <input type='text' placeholder='Contact Number' onChange={(e)=>setphone(e.target.value)} className='form-control mt-3'/>
<select onChange={(e)=>setpackage(e.target.value)} className='form-control mt-3'>

    <option value="">Select Package</option>
    <option value="monthly">Monthly</option>
    <option value="half">Half Yearly    </option>

    <option value="yearly">Yearly </option>

    <option value="three">Three Years</option>


    </select>


    <select  onChange={(e)=>setbranch(e.target.value)} className='form-control mt-3'>

    <option value="">Select Branch</option>
    <option value="gulbarag">Gulbarg</option>
    <option value="newkarachi">New Karachi    </option>

    <option value="nazimabad">Nazimabad </option>

    <option value="liyari">Liyari</option>
    <option value="garden">Garden</option>



    </select>

    <input onChange={(e)=>setsubject(e.target.value)} type='text' placeholder='Subject' className='form-control mt-3'/>
<textarea  onChange={(e)=>setmessage(e.target.value)}className='form-control mt-3' placeholder='Message'></textarea>   

<button onClick={addmember} class="btn btn-dark mt-3">Submit</button>
    </div>
    <Footer/>

        </div>
    )
}

export default MemberShip;