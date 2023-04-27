const serverConfig = require("./config/server.config")
const db = require("./models")
const cors = require("cors")
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

db.sequelize.sync({alter:true}).then(() =>{
    console.log("sync successfully");
}).catch(err=>{
    console.log(err.message);
})

require("./route/product.route")(app);
require("./route/user.route")(app);
require("./route/cart.route")(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Server started at Port :",serverConfig.PORT)
})