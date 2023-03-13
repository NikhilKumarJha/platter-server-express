const RestaurantsSvc=require('../../services/restaurants');

const getRestaurants=(req,res)=>{
    const restaurants=RestaurantsSvc.getRestaurants();
    res.render('restaurants',{
        appTitle:req.app.get('title'),
        title:'Restaurants | '+req.app.get('title'),
        restaurants
    })
};

module.exports={
    getRestaurants
}