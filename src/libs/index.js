import {session} from '../constants';
import commerce from '../commerceApi';

export function updateRecentlyViewed(pid){
    if(!pid){
        return;
    }
    let recentlyViewed = JSON.parse(sessionStorage.getItem(session.recentlyViewed));
    if(!recentlyViewed){
        recentlyViewed=[]
    }
    if(!recentlyViewed.includes(pid)){
        recentlyViewed.push(pid);
    }
    else if(recentlyViewed.includes(pid)){
        recentlyViewed = recentlyViewed.filter(id => id!==pid); 
        recentlyViewed.push(pid);
    }
    else{
        return;
    }
    sessionStorage.setItem(session.recentlyViewed, JSON.stringify(recentlyViewed));
}

export function getRecentlyViewedAsync(pid){
    return new Promise((resolve,reject)=>{
        if(!pid){
            reject("pid error");
        }
        let recentlyViewed = JSON.parse(sessionStorage.getItem(session.recentlyViewed));
        if(!recentlyViewed){
            reject("Cant fetch recently viewd items");
        }
        recentlyViewed=recentlyViewed.filter(id=>id!=pid);
        commerce.products.list({
            query:recentlyViewed.toString()
        })
        .then(response=>{
            resolve(response.data);
        })
        .catch(err=>{
            reject(err.message);
        })
    })
}