import DB from './db.json';

export function getDish(index) {
    return new Promise((resolve, reject) => {
        try {
            let result = DB.dishes[index];
            if(result == undefined) {
                reject('Ee saamanam ividilla, sorry')
            }
            resolve(result)
        } catch(error) {
            reject(error)
        }
    })
}

export function refresh() {
    return new Promise((resolve, reject) => {
        try {
            let result = DB.dishes;
            if(result == undefined) result = []
            resolve(result);
        } catch(error) {
            reject(error)
        }
    })
}

export function getContributor() {
    let contributor = DB.contributor
    return contributor == undefined ? 'aliens' : contributor
}