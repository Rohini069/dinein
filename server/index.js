const express =require('express');
const app=express();

const port = 3200;
require('./db');

const cors = require('cors');
app.use(cors()) 

app.use(express.json());

app.use('/api/auth',require('./routes/auth'))

app.get('/', (req,res)=>{ 
    res.set({
        'Content-Type':'application/json'
    });
    res.send('<h1>Hello World</h1>')
})

app.get('/about', (req,res)=>{
    res.set({
        'Content-Type':'text/html'
    });
    res.send('<p>Hello World gg</p>')
})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})