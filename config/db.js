const mongoose = require("mongoose")

const url = "mongodb+srv://giddy:BqGOcPI8FD0DL2K7@cluster0.7rupp.mongodb.net/JakeDB?retryWrites=true&w=majority";

// const url ="mongodb://localhost/jekalo"

mongoose.connect(url)
mongoose.connection
.on("open", (streme)=>{
    console.log("data base is connected sucessfully")
})
.once("error", (streme)=>{
  console.log("cants connect to database")
})

module.exports = mongoose