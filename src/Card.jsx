import reactSvg from "./assets/react.svg";

const Card = () => {
    return (
        <div className="card">
            <img className="card-image" src={reactSvg} alt="placeholder" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">Card Description</p>
            <a href="https://www.example.com">Read More</a>
        </div>
    );
}

export default Card;