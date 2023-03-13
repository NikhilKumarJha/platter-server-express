const {restaurants}=require('../data/db.json');

const getRestaurants=()=>{
    return restaurants;
}

module.exports={
    getRestaurants
};