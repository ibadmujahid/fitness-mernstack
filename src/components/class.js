import { Link } from 'react-router-dom';
import React from "react";
import Header from './header';
import Footer from './footer';


function Class()
{
    return(
        <div>

<Header/>
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Gym Classes</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Gym Classes</p>
            </div>
        </div>
    </div>
   
    <div class="container gym-class mb-5" >
        <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
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
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
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
    
   
    <Footer/>

        </div>
    )
}

export default Class;