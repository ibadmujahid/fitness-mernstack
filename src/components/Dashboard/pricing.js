import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Pricing(){
	const [branch,setbranch]= useState('')
    const [price,setprice]= useState('')
    const [message,setmessage]= useState('')
    const [pack,setpackage]= useState('')


	const addpricing = () =>
	{
		axios.post('http://localhost:4000/addpricing',{branch,price,message,pack})
	}
    return(


		<div>


<nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <div class="container-fluid">
  <Link class="navbar-brand text-light" to="/admin">Fitness</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul class="navbar-nav ms-auto" id="menu">
                    <li>
                        <Link to="/dietdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Diets</span>
                        </Link>
                      
                    </li>
					<li>
                        <Link to="/membershipdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Membership</span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/pricingdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Pricing</span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/pricing" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Add Pricing </span>
                        </Link>
                      
                    </li>

					<li>
                        <Link  to='/signupdata' class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Users</span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/workoutdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Workout</span>
                        </Link>
                      
                    </li>
                    <li>
                        <Link  to='/expert' class="">
                            <span id="heading1" class="nav-text text-light pt-5">Add Trainers</span>
                        </Link>
                      
                    </li> 

					<li>
                        <Link to="/expertdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See Trainers</span>
                        </Link>
                      
                    </li>
                    <li>
                        <Link to="/bmidata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">See  BMI </span>
                        </Link>
                      
                    </li>
                </ul>
    
    </div>
  </div>
</nav>




	
		   
		
			
		  

				
			  
				
					<div class="container-fluid mt-3">
					   <div className="row">
						<div className="col-lg-12">
		<div className="card">
		
		
			<div class="container">
		
			<input type="text"  onChange={(e)=>setprice(e.target.value)} placeholder="Price" className="form-control mt-3 "/>
<select  onChange={(e)=>setbranch(e.target.value)} className='form-control mt-3'>

<option value="">Select Branch</option>
<option value="gulbarag">Gulbarg</option>
<option value="newkarachi">New Karachi    </option>

<option value="nazimabad">Nazimabad </option>
<option value="liyari">Liyari</option>
<option value="garden">Garden</option>



</select>

<select onChange={(e)=>setpackage(e.target.value)} className='form-control mt-3'>

    <option value="">Select Package</option>
    <option value="monthly">Monthly</option>
    <option value="half">Half Yearly    </option>

    <option value="yearly">Yearly </option>

    <option value="three">Three Years</option>


    </select>


<textarea  onChange={(e)=>setmessage(e.target.value)}className='form-control mt-3' placeholder='Message'></textarea>   


<button onClick={addpricing} className="btn btn-dark mt-3 mb-3">Add Pricing</button>
					 
							</div>
		</div>
						
		
							</div>
					   </div>
						
				   
				
		
			   
		
						
		
					 
					</div>
				
			  
				
				
		
			
			  
			
		   
		
			 
			
		
		
		
		
		
			
				</div>
    )
}

export default Pricing