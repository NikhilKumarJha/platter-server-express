const mongoose=require('mongoose');
const Restaurant=mongoose.model('Restaurant')

// options={
//     sort:{
//         rating:'desc',
//         name:'asc'
//     },
//     where:{
//         cuisines:['Italian','Mexican'],
//         min_CostForTwo:400,
//         max_CostForTwo:1000,
//         min_rating:4
//     }
// }

const getRestaurants=(options={})=>{
    const {sort, where}=options;

    const query= Restaurant.find();
    if(sort){
        query.sort(sort); // sort={rating:'desc',name:'asc'}
    }
    if(where&&where.cuisines){
        query.where('cuisines').in(where.cuisines);
    }
    if(where&&where.min_CostForTwo){
        query.where('CostForTwo').gte(where.min_CostForTwo);
    }
    if(where&&where.max_CostForTwo){
        console.log("hi");
        query.where('CostForTwo').lte(where.max_CostForTwo);
    }
    if(where&&where.min_rating){
        query.where('rating').gte(where.min_rating);
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