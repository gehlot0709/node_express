const mongoose = require('mongoose')

mongoose.connect("mongodb://gehlotstudy_db_user:123harshu@ac-bghipgo-shard-00-00.oz3w0rr.mongodb.net:27017,ac-bghipgo-shard-00-01.oz3w0rr.mongodb.net:27017,ac-bghipgo-shard-00-02.oz3w0rr.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-10xxi6-shard-0&authSource=admin&retryWrites=true&w=majority")



const db = mongoose.connection

db.on("connected", (data, err) => {
    console.log("data")
})