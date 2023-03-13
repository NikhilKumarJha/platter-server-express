const {execSync}=require('child_process');
const path=require('path');

const{
    DB_NAME
}=process.env;

try{
    console.log(process.cwd());
    console.log(__dirname);
    execSync(`mongoimport --db ${DB_NAME} --collection restaurants --drop --file "${path.join(process.cwd(),'src/data/seed/restaurants.json')}" --jsonArray`)
    execSync(`mongoimport --db ${DB_NAME} --collection items --drop --file "${path.join(process.cwd(),'src/data/seed/items.json')}" --jsonArray`)
    console.log('successfully imported restaurants');
}catch(err){
    console.log(err.message);
}