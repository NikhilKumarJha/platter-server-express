const express=require('express');
const{
    getItems,
    getItemById,
    postItem,
    patchItem
}=require('../../../controllers/api/v1/items');

const router=express.Router()

router.get('/',getItems);
router.get('/:id',getItemById);
router.post('/',postItem);
router.patch('/:id',patchItem);


module.exports=router;