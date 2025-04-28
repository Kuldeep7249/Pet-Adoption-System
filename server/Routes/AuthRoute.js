const express = require('express');
const bcrypt = require('bcryptjs');
const FormDataModel = require('../Model/UserSchema'); // Adjust the path as necessary
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    try {
      const email = req.body.email.toLowerCase().trim();
      const { password } = req.body;
  
      const existingUser = await FormDataModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json("Already registered");
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await FormDataModel.create({...req.body,
        email,
        password: hashedPassword
      });
  
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json("Registration failed");
    }
  });
  
// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await FormDataModel.findOne({ email });
        if (!user) {
            return res.status(404).json("No records found!");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json("Wrong password");
        }

        return res.status(200).json("Success");
    } catch (err) {
        return res.status(500).json("Server error");
    }
});

module.exports = router;
