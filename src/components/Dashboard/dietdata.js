import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Dietdata(){


	const[user,setuser] = useState([]);



useEffect(()=>{
    axios.get('http://localhost:4000/dietdetails')
    .then(user=>setuser(user.data)).catch(err=>console.log(err))
},[])


const deletedaily = (id) =>
{

    axios.delete('http://localhost:4000/deleted/'+id).then(res => {console.log(res)
    window.location.reload()});

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

<div class="card">



<div class="container mt-3">
               <div className="row">
				<div className="col-lg-12">



	<table  className="table table-bordered text-center mt-3">
    <tr>
      
    <th>Morning Food</th>
    <th>Evening Food</th>
    <th>Night Food</th>
    <th>Action</th>


    </tr>

    {
        user.map((data,index)=>
    <tr>

<td>{data.morningfood}</td>
        <td>{data.eveningfood}</td>

        <td>{data.nightfood}</td>
<td>

    <button onClick={()=>deletedaily(data._id)} className="btn btn-dark">Delete</button>
</td>


    </tr>
    
    
    
    
    )
    }
</table>

					</div>			

					</div>
			   </div>
                
           
               </div>

{/* 
<div class="container mt-3">
               <div className="row">
				<div className="col-lg-12">
                     <table className="table table-bordered text-center mt-5">
<tr>
    <th>Name</th>

    <th>Height</th>

    <th>Weight</th>
    <th>Action</th>

</tr>

{
    user.map((data,index)=>
    <tr>
        <td>{data.dailyfood}</td>
        <td>{data.description}</td>

        <td>{data.time}</td>
<td>

    <button onClick={()=>deletedaily(data._id)} className="btn btn-dark">Delete</button>
</td>
    </tr>
    
    )
}
                        </table>
                        </div>
                        </div>
                        </div> */}
       

                

		
		   
		
		

					
			
			  
				
				
		
			
			  
			</div>
			
		   
		
			 
			
		
		
		
		
		
			
			
    )
}

export default Dietdata