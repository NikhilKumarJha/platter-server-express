const RestaurantService=require('../../../services/restaurants')

// api/v1/restaurants
// api/v1/restaurants?page=2
// api/v1/restaurants?sort=name:asc
// api/v1/restaurants?sort=rating:desc
// api/v1/restaurants?sort=rating:desc,name:asc
// api/v1/restaurants?sort=rating:desc,name:asc&cuisines=Italain,Mexican&min_CostForTwo=400&max_CostForTwo=1000&min_rating=4&page=2
// api/v1/restaurants?sort=rating ->BAD REQUEST
const getRestaurants=async (req,res)=>{
    const {
        sort,
        cuisines,
        min_costForTwo,
        max_costForTwo,
        min_rating,
        page
    }=req.query; // req.query={sort:'rating:desc,name:asc'}; sort='rating:desc,name:asc'
    const options={};


    // sorting
    if(sort){
        options.sort={};
        
        const fields=sort.split(','); // ['rating:desc','name:asc', 'page:2']
        
        for(let i=0;i<fields.length;i++){
            const parts=fields[i].split(':'); // ['name','asc']
            if(parts.length!==2){
                return res.status(400).json({
                    status:'error',
                    message:'The sort query string parameter is not in correct format. Example of right usage - ?sort=name:asc, ?sort=name:desc'
                })
            }
            options.sort[parts[0]]=parts[1];
        }   
    }

    // filtering
    if(cuisines){
        options.where={
            ...options.where,
            cuisines:cuisines.split(',')
        }
    }

    if(min_costForTwo){
        options.where={
            ...options.where,
            min_costForTwo:min_costForTwo
        }
    }

    if(max_costForTwo){
        options.where={
            ...options.where,
            max_costForTwo:max_costForTwo
        }
    }

    if(min_rating){
        options.where={
            ...options.where,
            min_rating:min_rating
        }
    }

    //pagination
    const pageInt=parseInt(page,10);
    if(!isNaN(pageInt)){
        options.page=pageInt;
    }else{
        options.page=1
    }

    try{
        const restaurants=await RestaurantService.getRestaurants(options)
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