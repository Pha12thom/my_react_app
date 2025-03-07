import React, {useState} from "react";

const Car = () => {
    const [car, setCar] = useState({
        name: "ford",
        make: "Mustang ",
        Year: 2024,
    });

    const carNamehandler = (event) => {
        setCar({...car, name: event.target.value});

    }

    const makehandler = (event) => {
        setCar({...car, make: event.target.value});
    }

    const yearhandler = (event) => {
        setCar({...car, Year: event.target.value});
    }

    return(
        <div>
            <h2> My fav Car is {car.name} model {car.make} of {car.Year} </h2>
            <p> Name: {car.name}</p>
            
            <input type="text" value={car.name} onChange={carNamehandler}/>
            <p> Make : {car.make}</p>
            <input type="text" value={car.make} onChange={makehandler}/>
            <p> Year : {car.Year}</p>
            <input type="number" value={car.Year} onChange={yearhandler}/>
        </div>
    )
}


export default Car;