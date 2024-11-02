import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from './header';
import Footer from './footer';


function Index()
{



    const [name,setname] = useState('')
    const [height,setheight] = useState('')

    const [weight,setweight] = useState('')

    const calculate = () =>
        {
            if(name == "")
                {
                    Swal.fire({
                        title: "Validation Message",
                        text: "Name is Required*",
                        icon: "wrong"
                      });
                }
                else if(weight == "")
                {
                    Swal.fire({
                        title: "Validation Message",
                        text: "Weight is Required*",
                        icon: "wrong"
                      });
                }
                else if(weight < 1)
                    {
                        Swal.fire({
                            title: "Validation Message",
                            text: " Wrong weight",
                            icon: "wrong"
                          });
                    }
                    else if(height < 1)
                        {
                            Swal.fire({
                                title: "Validation Message",
                                text: " Wrong height",
                                icon: "wrong"
                              });
                        }
                else if(height == "")
            
                {
                    Swal.fire({
                        title: "Validation Message",
                        text: "Height is Required*",
                        icon: "wrong"
                      });
                }
            else{
                


                let height = parseInt(document
                    .querySelector("#height").value);
        
            let weight = parseInt(document
                    .querySelector("#weight").value);
        
            let result = document.querySelector("#result");
        
          
            if (height === "" || isNaN(height)) 
                result.innerHTML = "Provide a valid Height!";
        
            else if (weight === "" || isNaN(weight)) 
                result.innerHTML = "Provide a valid Weight!";
        
           
            else {
        
                let bmi = (weight / ((height * height) 
                                    / 10000)).toFixed(2);
        
              
                if (bmi < 18.6) result.innerHTML =
                    `Under Weight : <span>${bmi}</span>`;
        
                else if (bmi >= 18.6 && bmi < 24.9) 
                    result.innerHTML = 
                        `Normal : <span>${bmi}</span>`;
        
                else result.innerHTML =
                    `Over Weight : <span>${bmi}</span>`;
     
            
        }

        
        axios.post('http://localhost:4000/calculatebmi',{name,height,weight});


            }
        }



    
    const[user,setuser] = useState([]);
	useEffect(()=>
{axios.get('http://localhost:4000/expertdata')
.then(user=>setuser(user.data)).catch(err=>console.log(err))
    
console.log(user);

},[])

    return(
        <div>




  
<Header/>



    <div class="container-fluid p-0">
        <div id="blog-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="template/img/carousel-1.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-light text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                        <Link to="/signup" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="template/img/carousel-2.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-light text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Get Body In Shape</h2>
                        <Link to="/signup" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</Link>
                    </div>
                </div>
            </div>
            <Link class="carousel-control-prev" to="#blog-carousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </Link>
            <Link class="carousel-control-next" to="#blog-carousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </Link>
        </div>
    </div>
   
    <div class="container gym-class mb-5">
        <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <Link to="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i class="flaticon-bodybuilding"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <Link to="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                </div>
            </div>
        </div>
    </div>
   
    <div class="container py-5">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <img class="img-fluid mb-4 mb-lg-0" src="template/img/about.jpg" alt="Image" />
            </div>
            <div class="col-lg-6">
                <h2 class="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                <div class="row py-2">
                    <div class="col-sm-6">
                        <i class="flaticon-barbell display-2 text-primary"></i>
                        <h4 class="font-weight-bold">Certified GYM Center</h4>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                    <div class="col-sm-6">
                        <i class="flaticon-medal display-2 text-primary"></i>
                        <h4 class="font-weight-bold">Award Winning</h4>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                </div>
                <Link to="/about" class="btn btn-lg px-4 btn-outline-primary">Learn More</Link>
            </div>
        </div>
    </div>

    <div class="container-fluid my-5">
        <div class="row">
            <div class="col-lg-4 p-0">
                <div class="d-flex align-items-center bg-secondary text-white px-5" >
                    <i class="flaticon-training display-3 text-primary mr-3"></i>
                    <div class="">
                        <h2 class="text-white mb-3">Progression</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="d-flex align-items-center bg-primary text-white px-5" >
                    <i class="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                    <div class="">
                        <h2 class="text-white mb-3">Workout</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 p-0">                <div class="d-flex align-items-center bg-secondary text-white px-5" >
                    <i class="flaticon-treadmill display-3 text-primary mr-3"></i>
                    <div class="">
                        <h2 class="text-white mb-3">Nutrition</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="container feature pt-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Why Choose Us?</h4>
            <h4 class="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
        </div>
        <div class="row">
            <div class="col-md-6 mb-5">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <img class="img-fluid mb-3 mb-sm-0" src="template/img/feature-1.jpg" alt="Image" />
                        <i class="flaticon-barbell"></i>
                    </div>
                    <div class="col-sm-7">
                        <h4 class="font-weight-bold">Videos Instruction</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-5">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <img class="img-fluid mb-3 mb-sm-0" src="template/img/feature-2.jpg" alt="Image" />
                        <i class="flaticon-training"></i>
                    </div>
                    <div class="col-sm-7">
                        <h4 class="font-weight-bold">Training Calendar</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-5">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <img class="img-fluid mb-3 mb-sm-0" src="template/img/feature-3.jpg" alt="Image" />
                        <i class="flaticon-trends"></i>
                    </div>
                    <div class="col-sm-7">
                        <h4 class="font-weight-bold">Free Apps & WiFi</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-5">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <img class="img-fluid mb-3 mb-sm-0" src="template/img/feature-4.jpg" alt="Image" />
                        <i class="flaticon-support"></i>
                    </div>
                    <div class="col-sm-7">
                        <h4 class="font-weight-bold">Community Support</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div class="subscribe container-fluid my-5 py-5 text-center">
        <h4 class="display-4 text-white font-weight-bold mt-5 mb-3">Subscribe Our Newsletter</h4>
        <p class="text-white mb-4">Subscribe and get Our latest article in your inbox</p>
        <form class="form-inline justify-content-center mb-5">
            <div class="input-group">
                <input type="text" class="form-control-lg" placeholder="Your Email"/>
                 <div class="input-group-append">
                   <button class="btn btn-primary" type="submit">Subscribe</button>
                </div>
            </div>
        </form>
    </div>
 
    <div class="container gym-feature py-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Class Timetable</h4>
            <h4 class="display-4 font-weight-bold">Working Hours and Class Time</h4>
        </div>
        <div class="tab-class">
            <ul class="nav nav-pills justify-content-center mb-4">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#class-all">All Classes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#class-cardio">Cardio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#class-crossfit">Crossfit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#class-powerlifting">Powerlifting</a>
                </li>
            </ul>
            <div class="tab-content">
                <div id="class-all" class="container tab-pane p-0 active">
                    <div class="table-responsive">
                        <table class="table table-bordered table-lg m-0">
                            <thead class="bg-secondary text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>

                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Morning</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    
                                </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Evening</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Night</th>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                   
                                </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="class-cardio" class="container tab-pane fade p-0">
                    <div class="table-responsive">
                        <table class="table table-bordered table-lg m-0">
                            <thead class="bg-secondary text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                   
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Morning</th>
                                    <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                   </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Evening</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                    <td></td>
                                     </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Night</th>
                                    <td><h5>Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td class="bg-primary text-white"><h5 class="text-white">Cardio</h5>John Deo</td>
                                    </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="class-crossfit" class="container tab-pane fade p-0">
                    <div class="table-responsive">
                        <table class="table table-bordered table-lg m-0">
                            <thead class="bg-secondary text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Morning</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                      </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Evening</th>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
  </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Night</th>
                                    <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                   </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="class-powerlifting" class="container tab-pane fade p-0">
                    <div class="table-responsive">
                        <table class="table table-bordered table-lg m-0">
                            <thead class="bg-secondary text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                      </tr>
                            </thead>
                            <tbody class="text-center">
                            <tr>
                                    <th class="bg-secondary text-white align-middle">Morning</th>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
                                    <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                      </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Evening</th>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                    <td></td>
  </tr>
                                <tr>
                                    <th class="bg-secondary text-white align-middle">Night</th>
                                    <td class="bg-primary text-white"><h5 class="text-white">Crossfit</h5>Adam Phillips</td>
                                    <td></td>
                                    <td><h5>Power Lifting</h5>James Alien</td>
                                    <td></td>
                                    <td><h5>Cardio</h5>John Deo</td>
                                   </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid position-relative bmi my-5">
        <div class="container">
            <div class="row px-3 align-items-center">
                <div class="col-md-6">
                    <div class="pr-md-3 d-none d-md-block">
                        <h4 class="text-light">Body Mass Index </h4>
                        <h4 class="display-4 text-white font-weight-bold mb-4">Whate is BMI?</h4>
                        <p class="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                    </div>
                </div>
                <div class="col-md-6 bg-secondary py-5">
                <center>
      
      {/* Calculate BMI Result Here */}
        <div className="mt-3 text-dark text-large" id="result"></div>
        </center>
                    <div class="py-5 px-3">
                        <h1 class="mb-4 text-white">Calculate your BMI</h1>
                        <form>
                            <div class="form-row">
                            <div class="col form-group">
                                    <input type="text" class="form-control form-control-lg bg-dark 
                                    text-white" onChange={(e)=>setname(e.target.value)} placeholder="Name"/>
                                </div>
                                <div class="col form-group">
                                    <input type="number" class="form-control 
                                    form-control-lg bg-dark text-white" id="weight" onChange={(e)=>setweight(e.target.value)} placeholder="Weight (KG)"/>
                                </div>
                                <div class="col form-group">
                                    <input type="number" class="form-control form-control-lg bg-dark 
                                    text-white" id="height" onChange={(e)=>setheight(e.target.value)} placeholder="Height (CM)"/>
                                </div>
                            </div>
                       
                            <div class="form-row">
                                <div class="col">
                                    <input type="button" onClick={calculate} class="btn btn-lg btn-block
                                     btn-dark border-light"
                                        value="Calculate Now"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container pt-5 team">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Our Trainers</h4>
            <h4 class="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
        </div>
        <div class="row">
            {
                user.map((data,index)=>
            
                <div class="col-lg-3 col-md-6 mb-5">
                <div class="card border-0 bg-secondary text-center text-white">
                    <img class="card-img-top" src={`images/${data.profile}`} alt="" />
                    
                    <div class="card-body bg-secondary">
                        <h4 class="card-title text-primary">{data.name}</h4>
                        <p class="card-text">{data.details}</p>
                    </div>
                </div>
            </div>
            
            
            )
            }
        
         
        
          
        </div>
    </div>
   
    <div class="container-fluid position-relative testimonial my-5">
        <div class="container">
            <div class="row px-3 align-items-center">
                <div class="col-md-6 bg-secondary">
                    <div class="d-flex align-items-center px-3">
                        <div id="carouselId" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselId" data-slide-to="1"></li>
                                <li data-target="#carouselId" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="template/img/testimonial-1.jpg" alt="Image" />
                                        <div class="pl-4">
                                            <h4 class="text-light">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="template/img/testimonial-2.jpg" alt="Image" />
                                        <div class="pl-4">
                                            <h4 class="text-light">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="d-flex align-items-center mb-4 text-white">
                                        <img width="80" height="80" class="rounded-circle bg-dark p-2" src="template/img/testimonial-3.jpg" alt="Image" />
                                        <div class="pl-4">
                                            <h4 class="text-light">Client Name</h4>
                                            <p class="m-0">Profession</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="pl-md-3 d-none d-md-block">
                        <h4 class="text-light">Testimonial</h4>
                        <h4 class="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                        <p class="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container pt-5">
        <div class="d-flex flex-column text-center mb-5">
            <h4 class="text-light font-weight-bold">Our Blog</h4>
            <h4 class="display-4 font-weight-bold">Latest Article From Blog</h4>
        </div>
        <div class="row">
            <div class="col-lg-6 mb-5 blog-item">
                <img class="img-fluid mb-4" src="template/img/blog-1.jpg" alt="Image" />
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white"
                    >
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div class="pl-3">
                        <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <Link class="btn btn-outline-primary mt-2 px-3" to="">Read More <i class="fa fa-angle-right"></i></Link>
            </div>
            <div class="col-lg-6 mb-5 blog-item">
                <img class="img-fluid mb-4" src="template/img/blog-2.jpg" alt="Image" />
                <div class="d-flex align-items-center mb-4">
                    <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white"
                    >
                        <small>01</small>
                        <strong class="text-uppercase m-0 text-white">Jan</strong>
                        <small>2045</small>
                    </div>
                    <div class="pl-3">
                        <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex">
                            <small class="mr-2 text-muted"><i class="fa fa-user"></i> Admin</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                    </div>
                </div>
                <p>Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
                <Link class="btn btn-outline-primary mt-2 px-3" to="">Read More <i class="fa fa-angle-right"></i></Link>
            </div>
        </div>
    </div>

   <Footer/>
 

   
        </div>
    )
}

export default Index;