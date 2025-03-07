import styles from './Button.module.css';
const Button = () => {
    var count = 0;
    const handleclick2 = (name) => {
        if(count < 3){
            count += 1;
            console.log(`${count} Button clicked OUCH! 😎😎😎😒😒😒`);
        }
        else{
            console.log("Stop clicking me!😒😒😒");
        }
        console.log(`${name} clicked OUCH! 😎😎😎😒😒😒`);
    }

    const handleclick = (e) => {
        console.log(e);
    }
    return (<button onClick={(e) => handleclick(e)}>Click me</button>);
}

export default Button;