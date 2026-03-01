const dotenv=require('dotenv');
const express = require('express');
const mongoose= require('mongoose');
const path=require('path');
const productRoutes= require('./routes/productRoutes');
const adminRoutes= require('./routes/adminRoutes');
const emailRoutes= require('./routes/emailRoutes');
const cartRoutes= require('./routes/cartRoutes');
dotenv.config()
const cors = require('cors');

const app= express();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('DB connected successfully')})
.catch((err) => {
    console.log(err.message)
})

app.use('/api',productRoutes);
app.use('/admin',adminRoutes);
app.use('/email',emailRoutes);
app.use('/cart',cartRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server started with port number ${PORT}`)
})