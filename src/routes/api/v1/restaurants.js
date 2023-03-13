const express=require('express');
const{
    getRestaurants,
    getRestaurantByIdOrSlug
}=require('../../../controllers/api/v1/restaurants');

const router=express.Router()

router.get('/',getRestaurants);
router.get('/:idOrSlug',getRestaurantByIdOrSlug);

module.exports=router;