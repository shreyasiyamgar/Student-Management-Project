
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await User.deleteMany({});
  await User.insertMany([
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2"},
    { username: "user3", password: "pass3" },

    { username: "user4", password: "pass4" },

    { username: "user5", password: "pass5" },

    { username: "user6", password: "pass6" },

  ]);
  console.log("Dummy users inserted");
  process.exit();
});
