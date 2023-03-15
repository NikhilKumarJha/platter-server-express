const ItemsService=require('../../../services/items');
const { getHttpError } = require('../../../utils/error');

// GET /api/v1/items?page=2
const getItems=async(req,res,next)=>{
    const {page}=req.query;

    const options={};

    const pageInt=parseInt(page,10);
    if(!isNaN(pageInt)){
        options.page=pageInt;
    }else{
        options.page=1;
    }

    try{
        const items=await ItemsService.getItems(options);
        return res.json(
            {
                status:'success',
                data:items
            }
        );
    }catch(err){
        return next(getHttpError(err.message,500));
    }
};

const getItemById=async (req,res,next)=>{
    const {id}=req.params;
    try{
        const item=await ItemsService.getItemsBYId(id);
        if(!item){
            return next(getHttpError("Item with given id does not exist",404));
        }
        return res.json({
            status:'success',
            data:item 
        })
    }catch(err){
        if(err.name==='CastError'){
            return next(getHttpError("Item with given id does not exist",404));
        }
        return next(getHttpError(err.message,500));
    }
};

module.exports={
    getItems,
    getItemById
};