const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//post Api 
router.post('/', async (req,resp)=>{
    try{
        console.log('req-body', req.body);
        const tempObj = new Product({
                    id: req.body.id,
                    title: req.body.title,
                    price: req.body.price,
                    description: req.body.description,
                    category: req.body.category,
                    image: req.body.image,
        })
        const response = await tempObj.save();
        console.log(response);
        resp.status(201).json(response);


    }catch(err){
     resp.status(400).json({message:err.message});
    }

})
  



    //get the data from database
router.get('/', async (req, resp)=>{
    console.log('inside get api call.')
    try{
       const  productslist= await Product.find();
        console.log( productslist)
        resp.status(200).json( productslist);
    }
    catch(err){
        resp.status(400).json({message: err.message});
    }
})

module.exports = router;