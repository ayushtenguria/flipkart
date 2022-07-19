import mongoose from "mongoose";

function initDB(){
    if(mongoose.connection[0].readyState){
        console.log("already connected")
        return
    }
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlPArser:true,
        useUnifiedTopology:true,
    })
    mongoose.connection.on('connected',()=>{
        console.log("Connected to DB")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("error connecting", err)
    })
}

export default initDB;