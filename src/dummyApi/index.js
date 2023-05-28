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
    static getProductById(productId){
        return new Promise((resolve, reject)=> {
            var allProducts = [];
            products.catelog.forEach(cat=>{
                allProducts.push(...cat.products);
            })
            const prod = allProducts.find(prod => {
                if(prod.productId == productId){
                    return prod;
                }
            });
            if(prod){
                resolve(prod);
            }
            else{
                reject("oops! no product found");
            }
        })
    }
}

