const express = require("express")
const app = express()

app.get("/" , (req,res)=>{
  res.send("Welcome to this web server!")
})

const port = 3000

app.listen(port , process.env.SERVER_IP , ()=>{
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
})