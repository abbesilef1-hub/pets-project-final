const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");

// REGISTER
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, phone, address, role, email, password } = req.body;

  try {
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      lastName,
      phone,
      address,
      role,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const payload = {
      _id: savedUser._id,
      name: savedUser.name,
    };

    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: "1h",
    });

    res.status(201).send({
      user: savedUser,
      msg: "User registered successfully",
      token: `bearer ${token}`,
    });
  } catch (error) {
  console.log(error);
  res.status(500).send({
    msg: "Server Error",
    error: error.message,
  });
  }
});

// LOGIN
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;

  try {
    const searchedUser = await User.findOne({ email });

    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad credentials" });
    }

    const match = await bcrypt.compare(
      password,
      searchedUser.password
    );

    if (!match) {
      return res.status(400).send({ msg: "Bad credentials" });
    }

    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };

    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: "1h",
    });

    res.status(200).send({
      user: searchedUser,
      msg: "Login successful",
      token: `bearer ${token}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Cannot login" });
  }
});

// CURRENT USER
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({
    user: req.user,
  });
});

// get all user
router.get("/", async(req, res)=>{
    try {
        let result=await User.find();
        res.send({users:result, msg:"All users"});
    } catch (error) {
        console.log(error)
    }
})

// delete user
router.delete("/:id", async(req, res)=>{
    try {
        let result=await User.findByIdAndDelete(req.params.id);
        res.send({msg:"user is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update user
router.put("/:id", async(req, res)=>{
    try {
        let result=await User.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({user:result, msg:"user is Updated"});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;