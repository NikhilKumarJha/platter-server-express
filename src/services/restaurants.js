const mongoose=require('mongoose');
const Restaurant=mongoose.model('Restaurant')

// options={
//     sort:{
//         rating:'desc',
//         name:'asc'
//     }
// }

const getRestaurants=(options={})=>{
    const {sort}=options;

    const query= Restaurant.find();
    if(sort){
        query.sort(sort); // sort={rating:'desc',name:'asc'}
    }
    return query.exec();
}

const getRestaurantById=(id)=>{
    return Restaurant.findById(id);
}

const getRestaurantBySlug=(slug)=>{
    return Restaurant.findOne(
        {
            slug:slug
        }
    );
}

module.exports={
    getRestaurants,
    getRestaurantById,
    getRestaurantBySlug
};