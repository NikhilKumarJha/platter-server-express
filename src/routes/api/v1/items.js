const express=require('express');
const{
    getItems
}=require('../../../controllers/api/v1/items');

const router=express.Router()

router.get('/',getItems);

module.exports=router;