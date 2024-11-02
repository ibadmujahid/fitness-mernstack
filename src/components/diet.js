import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Header from './header';
import Footer from './footer';

function Diet()
{


    const [user,setuser] = useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:4000/dailydietdetails')
        .then(user=>setuser(user.data)).catch(err=>console.log(err))
    },[])
    
   
    const [morningfood,setmorningfood]= useState('');
    const [eveningfood,seteveningfood]= useState('');
    const [nightfood,setnightfood]= useState('');

const navigate = useNavigate();




const Dietrecord = () =>
{


    if(morningfood == "")
    {
        Swal.fire({
            title: "Validation Message",
            text: "Must be Filled*",
            icon: "wrong"
          });
    }
    else if(eveningfood == "" )
    {
        Swal.fire({
            title: "Validation Message",
            text: "Must be Filled*",
            icon: "wrong"
          });
    } 
    else if(nightfood == "" )
    {
        Swal.fire({
            title: "Validation Message",
            text: "Must be Filled*",
            icon: "wrong"
          });
    } 
    else{

        axios.post('http://localhost:4000/userdiet',{morningfood,eveningfood,nightfood})
navigate('/workout')
    }
}

    return(
        <div>

<Header/>
   
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Diet   </h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white"> Diets  </p>
            </div>
        </div>
    </div>
   
  <div className="container">

  <center>
                        <h3>Your Daily Diet Details</h3>
                     </center>
  <input type="text" placeholder="Morning Food"   onChange={(e)=>setmorningfood(e.target.value)} className="form-control mt-3"/>
    <input type="text" placeholder="Evening Food"  onChange={(e)=>seteveningfood(e.target.value)}  className="form-control mt-3"/>
      <input type="text" placeholder="Night Food" onChange={(e)=>setnightfood(e.target.value)}   className="form-control mt-3"/>

                        <div>
                            <button class="btn btn-dark mt-3"
                             type="submit" onClick={Dietrecord }>Send</button>
                        </div>

  </div>
 


  <center>
                        <h3>Our Daily Diet Details</h3>
                     </center>

                     <div className='card'>
    <div className='container'>
    <div className='card'>
                     <table className="table table-bordered text-center mt-5">
<tr>
    <th>Dailyfood</th>
    <th>Description</th>
    <th>Eating Time</th>
 

</tr>

{
    user.map((data,index)=>
    <tr>
        <td>{data.dailyfood}</td>
        <td>{data.description}</td>

        <td>{data.time}</td>

    </tr>
    
    )
}
                        </table>
                        </div>
                        </div>  
                        </div>

                        <Footer/>

        </div>
    )
}

export default Diet