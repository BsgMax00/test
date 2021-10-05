function numberOfCarsEachBrand(cars, brand){
    return cars.reduce((counter, p) => counter + (p.brand === brand && 1), 0);
}

function numberOfTypesEachBrand(cars, type){
    return cars.reduce((counter, p) => counter + (p.type === type && 1), 0)
}

export function CarsFromBrand(cars){
    const uniqueCars = [...new Set(cars.map(p => p.brand))];
    return uniqueCars.map(c =>({
        brand: c,
        numberOfCars: numberOfCarsEachBrand(cars, c)
    }));
}

/*
export function CarsFromBrandExtention(cars){
    const uniqueTypes = [...new Set(cars.map(c => c.brand, t => t.type))]
    return uniqueTypes.map(c =>({
        brand: c,
        numberOfCars: numberOfCarsEachBrand(cars, c),
        types: numberOfTypesEachBrand(cars, t)
    }));
}
 */