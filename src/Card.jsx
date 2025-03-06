import reactSvg from "./assets/react.svg";
import styles from "./Button/Button.module.css"

const Card = () => {
    return (
        <div className="card">
            <img className="card-image" src={reactSvg} alt="placeholder" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">Card Description</p>
            <button className={styles.button}><a href="#" >Click me</a></button>
            
        </div>
    );
}

export default Card;