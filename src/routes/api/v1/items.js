const express=require('express');
const{
    getItems,
    getItemById
}=require('../../../controllers/api/v1/items');

const router=express.Router()

router.get('/',getItems);
router.get('/:id',getItemById);

module.exports=router;