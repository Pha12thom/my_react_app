import React, {useState} from "react";


const Onchange = () => {
    const [name, setName ] = useState("Guest");
    const [quantity, setQuantity] = useState();

const quantityhandler = (event) => {
    setQuantity(event.target.value);
}

    const namehandler = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <p> Name : {name} </p>
            <input value={name} onChange={namehandler}/>
            <p> Quantity : {quantity}</p>
            <input value={quantity} onChange={quantityhandler} type="number"/>

        </div>
    );
}

export default Onchange;