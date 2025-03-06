import Styles from "./Styles/Footer.module.css"

const Footer = () => {
   
    return (
        <footer className={Styles.footer}>
            <p>&copy; {new Date().getUTCFullYear()} </p>
        </footer>
    );
}

export default Footer;