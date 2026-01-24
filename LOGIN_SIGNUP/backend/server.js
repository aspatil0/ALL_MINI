// 1. Imports
const express = require("express");
const cors = require("cors");

require("./db");
const User = require("./User");

// 2. App setup
const app = express();
app.use(cors());
app.use(express.json());

// 3. APIs (WRITE SIGNUP & LOGIN HERE)

// 👉 STEP 7: SIGNUP API
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new User({
    name,
    email,
    password
  });

  await newUser.save();
  res.json({ message: "Signup successful" });
});

// 👉 STEP 8: LOGIN API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  res.json({
    success: true,
    message: "Login successful",
    name: user.name
  });
});


// 4. Server start (ALWAYS LAST)
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
