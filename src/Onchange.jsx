import React, {useState} from "react";


const Onchange = () => {
    const [name, setName ] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();


const quantityhandler = (event) => {
    setQuantity(event.target.value);
}

    const namehandler = (event) => {
        setName(event.target.value);
    }

    const commenthandler = (event) => {
        setComment(event.target.value);
    }


    const [payment, setPayment] = useState();

    const paymenthandler = (event) => {
        setPayment(event.target.value);
    }

    return (
        <div>
            <p> Name : {name} </p>
            <input value={name} onChange={namehandler}/>
            <p> Quantity : {quantity}</p>
            <input value={quantity} onChange={quantityhandler} type="number"/>

            <p>Comment : {comment}</p>
            <textarea value={comment} onChange={commenthandler} placeholder="Write your comment here ......."/>
            <select value={payment} onChange={paymenthandler}>
                <option value="">select payment option</option>
                <option value="Visa">Visa</option>
                <option value="Paypal"><i class="fa fa-paypal" aria-hidden="true"></i></option>
            </select>
        </div>
    );
}

export default Onchange;