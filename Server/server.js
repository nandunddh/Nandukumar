const express = require("express");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand(dotenv.config());

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500;
const SERVER = process.env.SERVER || "";
require("./src/Config/DBConnection")
const List = require("./MVC/routes/userRoutes")

app.get("/",(req,res)=>{
  return res.json("Welcome");
});

app.use("/list",List);

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER} `);
})