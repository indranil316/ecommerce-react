import categories from './categories.json';
import products from './products.json';

export class Categories{
    static getCategories(){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve(categories);
            },2000)
        });
    }
    static getProductsByCategory(catId){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                products.catelog.forEach(catelog=>{
                    if(catelog.categoryId === catId){
                        resolve(catelog.products);
                    }
                })
                const prods = products.catelog.find(catelog =>catelog.categoryId == catId );
                if(prods===undefined){
                    reject({
                        message:"Invalid category id"
                    })
                }
                else{
                    resolve(prods.products)
                }
            },0)
        })
    }
}

