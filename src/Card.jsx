import reactSvg from "./assets/react.svg";

const Card = () => {
    return (
        <div className="card">
            <img className="card-image" src={reactSvg} alt="placeholder" />
            <h2>Card Title</h2>
            <p>Card Description</p>
            <a href="https://www.example.com">Read More</a>
        </div>
    );
}

export default Card;