// app.js
const express = require('express');
const app = express();
const PORT = 3000;



app.get('/' , function(req , res) {
    res.send("hello")
})

app.use(express.json());
app.post('/', (req, res)=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})




app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);