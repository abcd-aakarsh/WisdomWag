const port = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const Razorpay = require("razorpay");

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cors());
require("dotenv").config();

mongoose.connect(process.env.DATABASE)

const Course = mongoose.model("Course",{
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    students:{
        type:Number,
        required:true
    },
    price_inr:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    what_you_will_learn:{
        type:Object,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },
    reviews:{
        type:Object,
        required:true
    },
    modules:{
        type:Object,
        required:true
    },
    skills_you_will_gain:{
        type:Object,
        required:true
    },
})

app.post('/addcourse', async (req, res)=>{

    let courses = await Course.find({});
    let id;
    if (courses.length>0){
        let last_course_array = courses.slice(-1);
        let last_course = last_course_array[0];
        id = last_course.id+1;
    }
    else{
        id=1;
    }
    const course = new Course({
        id:id,
        title:req.body.title,
        author:req.body.author,
        level:req.body.level,
        rating:req.body.rating,
        students:req.body.students,
        price_inr:req.body.price_inr,
        category:req.body.category,
        image_url:req.body.image_url,
        duration:req.body.duration,
        description:req.body.description,
        what_you_will_learn:req.body.what_you_will_learn,
        requirements:req.body.requirements,
        reviews:req.body.reviews,
        modules:req.body.modules,
        skills_you_will_gain:req.body.skills_you_will_gain,
    })
    await course.save();
    res.json({
        success:true,
        title:req.body.title,
    })
})

app.post('/removecourse', async (req,res)=>{
    await Course.findOneAndDelete({id:req.body.id});
    res.json({
        success:true,
        title:req.body.title
    })
})

app.get('/allcourses', async (req,res)=>{
    let courses = await Course.find({});
    res.send(courses);
})

const Users = mongoose.model('Users', {
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i=0; i<50; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data, 'secret');
    res.json({success:true, token})
})

app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user){
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret');
            res.json({success:true, token});
        }
        else {
            res.json({success:false, errors:"Wrong Password"});
        }
    }
    else {
        res.json({success:false, errors:"Wrong Email Id"});
    }
})

app.post("/order", async (req,res)=>{
 try{
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order){
        return res.status(500).send("Error");
    }
    res.json(order);
    } catch(err){
    res.status(500).send("Error");
    }
})


app.listen(port,(error)=>{
    if (!error){
        console.log("Server running on port "+port);
    }
    else {
        console.log("Error : "+error);
    }
})