const express = require("express");
const app = express();

const usermodel = require("./models/user");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/show", async (req, res) => {
  const users = await usermodel.find();
  res.send(users);
});
app.get("/create", async (req, res) => {
  const userCreated = await usermodel.create({
    name: "daniyal",
    username: "mitsa",
    email: "mdgulsam@123gmail.com",
  });
  res.send(userCreated);
});

app.get("/update", async (req, res) => {
  const updateduser = await usermodel.findOneAndUpdate(
    { name: "sahnwaz" },
    { name: "pandu" },
    { new: "true" }
  );
  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  const deletedUser = await usermodel.findOneAndDelete({name:"daniyal"});
  res.redirect("/show");
});

app.listen(3000);
