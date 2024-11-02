import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Header from './header';
import Footer from './footer';


function Login()
{
    
const [loginemail, setloginemail] = useState('');
const [loginpass, setloginpass] = useState('');

const navigate = useNavigate();

const login = () =>
{
    axios.post('http://localhost:4000/login',{loginemail,loginpass}).then(
    result => {console.log(result)
    
        if(loginemail == "" )
        {
            Swal.fire({
                title: "Validation Message",
                text: "Email Field is Required*",
                icon: "wrong"
              });
        } 

        else if(!loginemail.includes('@') )
        {
            Swal.fire({
                title: "Validation Message",
                text: "Wrong Email Syntax*",
                icon: "wrong"
              });
        } 

        else  if(loginpass == "")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Password Field is Required*",
                icon: "wrong"
              });
        } 
     else if(result.data ==='userdata')
    {
        navigate('/');
    }
    else if(result.data === 'admindata')
    {
        navigate('/admin');
    }
    }
    
)
}
    return(
        <div>

<Header/>
   
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Login In </h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Log In  </p>
            </div>
        </div>
    </div>
   
  <div className="container">
 
    <input type="email" placeholder="Email"  onChange={(e)=>setloginemail(e.target.value)} className="form-control mt-3"/>
    <input type="password" placeholder="Password" onChange={(e)=>setloginpass(e.target.value)} className="form-control  mt-3"/>
   

 <button onClick={login} className="btn btn-dark mt-3">Login</button>
  </div>
  
  <Footer/>

        </div>
    )
}

export default Login;