import './App.css';
import {CARS, List_Items} from "./ data/data";
import {Cars} from "./components/Cars";
import {ListItems} from "./components/List";
import {Brands} from "./components/Brand";
import {BRAND_DATA} from "./components/Brand";
import {CarsFromBrand} from "./utilities/brand_utilities";

function App() {
    return (
        <div>
            <Cars cars={CARS} title="Auto's"/>
            <ListItems listItems={List_Items} title="Een test lijst"></ListItems>
            <Brands brands={BRAND_DATA} title="Test Merken"></Brands>
            <Brands brands={[...new Set(CARS.map(c => c.brand))]} title = "Merken"></Brands>
            <Brands brands={CarsFromBrand(CARS)} title="cars from brand"></Brands>
        </div>
    );
}

export default App;
