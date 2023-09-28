import DB from './db.json';

export function getDish(index) {
    return DB.dishes[index]
}

export function refresh() {
    return DB.dishes
}

export function getContributor() {
    return DB.contributor
}