const express=require('express');
const{
    getRestaurants
}=require('../../../controllers/api/v1/restaurants');

const router=express.Router()

router.get('/',getRestaurants);

module.exports=router;