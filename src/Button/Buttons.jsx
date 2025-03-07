import React, {useState} from "react"
import  "./Buttons.css"
const Buttons = () => {
    const [name, setName ] = useState("Guest");
    const [age, setAge ] = useState(0);

    const incrementage = () =>{
        setAge( age + 1);

    }
    //const displayname = ()=> {
      //  setName("milugo");

    //}

    const decrementage = () => {
        setAge(age - 1);
    }
    const reset = () => {
        setAge(0);


    }


    return (

        <div> 
            <h2><p className="age"> Age : {age}</p></h2>     
            <div className="counter">
            <button onClick={incrementage} className="Increaseage">increase Age</button>
            <button onClick={decrementage} className = "decreaseAge">decrement age</button>
            <button onClick={reset} className="resetAge">reset</button>     
        </div>
        </div>
    );

}

export default Buttons;