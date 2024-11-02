import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components';
import About from './components/about';
import Class from './components/class';
import Contact from './components/contact';
import Signup from './components/signup';
import Login from './components/login';
import Workout from './components/workout';
import Diet from './components/diet';
import Admin from './components/Dashboard/admin';
import SignupData from './components/Dashboard/signupdata';
import Workoutdata from './components/Dashboard/workoutdata';
import Dietdata from './components/Dashboard/dietdata';
import Blog from './components/blog';
import MemberShip from './components/membership';
import MemberDetails from './components/Dashboard/memberdetails';
import Pricing from './components/Dashboard/pricing';
import PricingDetails from './components/Dashboard/pricingdetails';
import Addexpert from './components/Dashboard/expert';
import Expertdetails from './components/Dashboard/expertdetails';
import BMIDetails from './components/Dashboard/bmidetails';


function App() {
  return (
    <div className="App">
      <Routes>


        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signupdata' element={<SignupData/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/workout' element={<Workout/>}/>
        <Route path='/workoutdata' element={<Workoutdata/>}/>
        <Route path='/diet' element={<Diet/>}/>
        <Route path='/dietdata' element={<Dietdata/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/membership' element={<MemberShip/>}/>
        <Route path='/membershipdata' element={<MemberDetails/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/pricingdata' element={<PricingDetails/>}/>
        <Route path='/expert' element={<Addexpert/>}/>
        <Route path='/expertdata' element={<Expertdetails/>}/>
        <Route path='/bmidata' element={<BMIDetails/>}/>




      </Routes>

    </div>
  );
}

export default App;
