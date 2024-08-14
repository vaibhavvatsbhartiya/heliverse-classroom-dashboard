const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// register a new user
const register = async (req, res) =>{
    const {name, email, password, phone_num, role} = req.body;
    try{
        console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({name, email, password: hashedPassword, phone_num, role});

        await newUser.save();
        res.status(201).json( {msg : "New user registered"});
        

    }catch(err){
        res.status(500).json({ msg: err.message });
        console.log(err);
    }
}

// login user
const login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})
        if (!user) return res.status(400).json({ msg: "User does not exist"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "8h"});
        res.json({msg: "user login in", token});
    } catch (err){
        res.status(500).json({msg: err.message});
        console.log(err);
    }
};

module.exports = {register, login};