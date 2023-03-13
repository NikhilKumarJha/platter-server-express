const ItemsService=require('../../../services/items');

// GET /api/v1/items?page=2
const getItems=async(req,res)=>{
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
        return res.status(500).json(
            {
                status:'error',
                message:err.message
            }
        );
    }
};

const getItemById=async (req,res)=>{
    const {id}=req.params;
    try{
        const item=await ItemsService.getItemsBYId(id);
        if(!item){
            return res.status(404).json({
                status:"error",
                message:"Item with given id does not exist"
            })
        }
        return res.json({
            status:'success',
            data:item 
        })
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).json({
                status:"error",
                message:"Item with given id does not exist"
            })
            return;
        }
        return res.status(500).json({
            status:"error",
            message:err.message
        })
    }
};

module.exports={
    getItems,
    getItemById
};