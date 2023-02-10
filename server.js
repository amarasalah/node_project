const express = require("express");
const app = express();
const db = require("./models")
const userRoutes =require('./routers/user-routes')

//run server

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRoutes)



const port = 3000;
db.sequelize.sync().then(()=>{
    app.listen(port,()=>console.log(`Server running on Port ${port} ...`));
})


