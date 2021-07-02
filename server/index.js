const app=require('express')();
const cors=require('cors');
const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(27017, function () {
    console.log("success");
})

app.use('/users',require('./users'))
app.use('/arts',require('./arts'))
app.get('/',(req,res)=>{
    res.json({"message":"great job!"})
})
