const express = require("express")
const app = express()

app.get("/" , (req,res)=>{
  res.send("Welcome to this web server!\n")
})

const port = process.env.SERVER_PORT || 3000

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})