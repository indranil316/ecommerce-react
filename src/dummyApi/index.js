import categories from './categories.json';

export class Categories{
    static get(){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve(categories);
            },2000)
        });
    }
}