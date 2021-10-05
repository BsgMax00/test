export const BRAND_DATA = [
    {brand: "opel", numberOfCars: 23},
    {brand: "BMW", numberOfCars: 11}
];

export function Brand(props){
    const {brand} = props;
    return <div className="card">
        <div>{brand.brand}</div>
        <div>{brand.numberOfCars}</div>
    </div>;
}

export function Brands(props){
    const {brands, title} = props;
    return <div className="section">
        <h3>{title}</h3>
        {brands.map((b) => <Brand brand={b}></Brand>)}
    </div>;
}
