const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const userdata = require('./Models/signup.js')
const memberdata = require('./Models/member.js');
const contactdata = require('./Models/contact.js')
const dietdata = require('./Models/userdiet.js')
const dailydietdata = require('./Models/dailydiet.js')
const pricingdata = require('./Models/pricing.js');
const expertdata = require('./Models/expert.js');
const bmidata = require('./Models/bmi.js')
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1');
const app = express();
app.use(express.json());
app.use(cors())


//Signup
app.post('/signup',(req,res)=>
    {
    
        memberdata.create(req.body)
      .then(myuser =>res.json(myuser))   
    
    })


//Sign up Fetch
app.get('/signupdetails',(req,res)=>
    {
        userdata.find().then(userrecord =>res.json(userrecord)).
        catch(err=>res.json(err));
    })
    


//Login
app.post('/login',(req,res)=>
{
    const {loginemail ,loginpass} = req.body;
    userdata.findOne({
        email : loginemail
    }).then(user =>
        {
            if(user)
            {
                if(user.role == "users"  && user.pass === loginpass)
                {
                    res.json('userdata')
                }
                else if(user.role == "admin"  && user.pass === loginpass)
                {
                    res.json('admindata');
                }
                else{
                    res.json('password incorrect')
                }
            }
            else
            {
                res.json('no Record found!!!!');
            }


        })
})



//membership add
app.post('/addmember',(req,res)=>
{

    memberdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})


//membership fetch
app.get('/memberdetails',(req,res)=>
    {
        memberdata.find().then(userrecord =>res.json(userrecord)).
        catch(err=>res.json(err));
    })


//pricing add
app.post('/addpricing',(req,res)=>
{

    pricingdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})


// pricing fetch
app.get('/pricingdetails',(req,res)=>
    {
        pricingdata.find().then(userrecord =>res.json(userrecord)).
        catch(err=>res.json(err));
    })


 //traier insert
// app.post('/addtrainer',upload.single('profile'),(req,res)=>
//     {
    
//             const {name,details} = req.body;
//             const imagename = req.file.filename;
    
//             const expert = new expertdata({
//                 name,details,
//                 profile : imagename
//             })
            
//             expert.save();
//             console.log(expert);
//     })


//trainer fetch
app.get('/expertdata',(req,res)=>
{
    expertdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})


//dailydiet by user fetch
app.get('/dietdetails',(req,res)=>
{
        dietdata.find().then(userrecord =>res.json(userrecord)).
        catch(err=>res.json(err));
})


//dailydiet by user add
app.post('/userdiet',(req,res)=>
{

    dietdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})


//bmi insert
app.post('/calculatebmi',(req,res)=>
{
    bmidata.create(req.body)
    .then(mybmi =>res.json(mybmi))   
})


//bmi fetch
app.get('/bmidata',(req,res)=>
{
    bmidata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})



// bmi delete
app.delete('/bmidelete/:id',(req,res)=>
{
    const id = req.params.id;
    bmidata.findByIdAndDelete({_id : id}).then(bmidata=>res.json(bmidata))
})



//dailydiet by admin add
app.post('/adddailydiet',(req,res)=>
    {
    
        dailydietdata.create(req.body)
      .then(mydailydiet =>res.json(mydailydiet))   
    
    })
    

// //dailydiet by admin fetch
// app.get('/dietdetails',(req,res)=>
// {
//     dietdata.find().then(userrecord =>res.json(userrecord)).
//     catch(err=>res.json(err));
// })


//dailydiet by admin delete
app.delete('/deleted/:id',(req,res)=>
{
    const id = req.params.id;
    dietdata.findByIdAndDelete({_id : id}).then(bmidata=>res.json(bmidata))
})


app.post('/contact',(req,res)=>
    {
    
      contactdata.create(req.body)
      .then(mydatauser =>res.json(mydatauser))   
    
    })
    

app.listen(4000,()=>
{
    console.log("Server is running");
})


