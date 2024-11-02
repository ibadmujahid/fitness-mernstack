import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


function Signup()
{
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [pass,setpass] = useState('');
   


    const navigate = useNavigate();

    const signuprecord = async () =>
    {
        const formdata = new FormData();
  formdata.append("name",name);
  formdata.append("email",email)
  formdata.append("pass",pass)


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
  else if(pass == "")
  {
      Swal.fire({
          title: "Validation Message",
          text: "Password Field is Required*",
          icon: "wrong"
        });
  } 

  else{

    axios.post('http://localhost:4000/signup',{name,email,pass})


    navigate('/login')
  }



    }
    return(
        <div>

<Header/>

   
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Sign Up</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Sign Up </p>
            </div>
        </div>
    </div>
   
  <div className="container">
    <input type="text"onChange={(e)=>setname(e.target.value)} placeholder="Name" className="form-control mt-3"/>
    <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} className="form-control mt-3"/>
    <input type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)} className="form-control mt-3"/>

 <button onClick={signuprecord} className="btn btn-dark mt-3">Signup</button>
  </div>
  
  <Footer/>
        </div>
    )
}

export default Signup;