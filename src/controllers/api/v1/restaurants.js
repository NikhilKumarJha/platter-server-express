const RestaurantService=require('../../../services/restaurants')

const getRestaurants=async (req,res)=>{
    try{
        const restaurants=await RestaurantService.getRestaurants()
        return res.json(
            {
                status:'success',
                data:restaurants
            }
        )
    }catch(err){
        res.status(500).json(
            {
                status:'error',
                message:err.message
            }
        );
    }
};

// GET api/v1/restaurants/:idOrSlug?matchBy=slug
const getRestaurantByIdOrSlug=async (req,res)=>{
    // {idOrSlug:'mad-about-pizza}
    const {idOrSlug}=req.params; 

    // {matchBy:'slug'}
    const {matchBy}=req.query;

    let isSlug=(matchBy==='slug'?true:false);

    let restaurant;

    try{
        if(isSlug){
            restaurant=await RestaurantService.getRestaurantBySlug(idOrSlug);
        }else{
            restaurant=await RestaurantService.getRestaurantById(idOrSlug);
        }
        if(!restaurant){
            return res.status(404).json(
                {
                    status:'error',
                    message:'Restaurant with given id does not exist'
                }
                )
            }
            
        return res.json({
            status:'success',
            data:restaurant
        })
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).json(
                {
                    status:'error',
                    message:'Restaurant with given id does not exist'
                }
            )
        }
        res.status(500).json({
            status:'error',
            message:'Internal Server Error'
        })
    }

}

module.exports={
    getRestaurants,
    getRestaurantByIdOrSlug
}