const express = require("express");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");


app.use(express.json());

// Endpoint to return "Hello World"
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// Endpoint to return "Welcome message"
app.get("/welcome", (req, res) => {
  console.log(`I am welcome log`);
  const saltRounds = 10;    
  const myPlaintextPassword = "s0//P4$$w0rD";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      res.json({ message: "Welcome to our application once again!!", hash: hash });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
