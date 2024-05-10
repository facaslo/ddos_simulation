const express = require("express");
const {bubble_sort_list} = require("./sorting_list.js");
const app = express();

app.get("/:list_size" , async(req,res)=>{
  const now = new Date();
  let time = now.toLocaleTimeString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });

  console.log(`${time} Petición generada desde ip:${req.ip}`)
  let list_size = req.params.list_size;
  if (!list_size) {
    return res.status(400).json({ error: "list_size parameter is required" });
  }
  sorted_list = await bubble_sort_list(list_size);
  res.send('<h1> The list was sorted! </h1>');
})

const port = process.env.SERVER_PORT || 3000;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})