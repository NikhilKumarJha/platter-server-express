const express=require('express');
const{
    getRestaurants,
    getRestaurantByIdOrSlug,
    getRestaurantItemsByIdOrSlug,
    getRestaurantItemsSummaryByIdOrSlug,
    postRestaurants
}=require('../../../controllers/api/v1/restaurants');

const router=express.Router()

router.get('/',getRestaurants);
router.get('/:idOrSlug',getRestaurantByIdOrSlug);
router.get('/:idOrSlug/items',getRestaurantItemsByIdOrSlug);
router.get('/:idOrSlug/items/summary',getRestaurantItemsSummaryByIdOrSlug);
router.post('/',postRestaurants);


module.exports=router;