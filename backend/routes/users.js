const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Get all users data
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Get single user data
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Add an idea
router.post("/", async (req, res) => {
  const userData = req.body;

  const user = new User({
    username: userData.username,
    email: userData.email,
    password: userData.password,
    first_name: userData.first_name,
    last_name: userData.last_name,
    dob: userData.dob,
    gender: userData.gender,
    profile_picture: userData.profile_picture,
  });

  try {
    const savedUser = await user.save();
    res.json({ success: true, data: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Update Idea
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          dob: req.body.dob,
          gender: req.body.gender,
          profile_picture: req.body.profile_picture,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Delete idea
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
