import "./Header.css"

const Header = () => {
    return (
        <header>
            <h1 className="header">My First React App</h1>
        
        <nav className="nav-bar">
            <ul className="nav-links">
                <li className="home"><a href="#">Home</a></li>
                <li className="about"><a href="#">About</a></li>  
                <li className="services"><a href="#">Services</a></li>
                <li className="contact"><a href="#">Contact</a></li>
            </ul>
        </nav>
        
        </header>
    )
}

export default Header;