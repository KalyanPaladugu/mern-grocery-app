const dotenv=require('dotenv');
const express = require('express');
const mongoose= require('mongoose');
const productRoutes= require('./routes/productRoutes')
dotenv.config()
const cors = require('cors');

const app= express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('DB connected successfully')})
.catch((err) => {
    console.log(err.message)
})

app.use('/api',productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server started with port number ${PORT}`)
})