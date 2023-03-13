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

module.exports={
    getRestaurants
}