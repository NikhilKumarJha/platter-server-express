const mongoose=require('mongoose');
const Item=mongoose.model('Item');

const {PAGE_SIZE}=require('../config');

const getItems=(options)=>{
    const {page}=options;
    const query=Item.find();
    if(page){
        query.skip(PAGE_SIZE*(page-1)).limit(PAGE_SIZE);
    }
    return query.exec();
}

module.exports={
    getItems
};