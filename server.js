const express = require("express");
const app = express();

//run server
const port = 3000;

app.listen(port,()=>console.log(`Server running on Port ${port}`));
