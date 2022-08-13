const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./router/product');
const colors = require('colors');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());
app.use('/product', productRouter);
app.get('/', (req,resp)=>{
    resp.send('<h2> Server is started <h2>');
})


mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log(colors.yellow('MongoDB connected...'))
    }).catch((err)=>console.log(`No connection`));
app.listen(PORT);