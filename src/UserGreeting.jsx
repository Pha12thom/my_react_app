import PropTypes from "prop-types";
import Styles from "./Styles/Greeting.module.css";
const userGreeting =(props) => {
   const WelcomeMsg =  <h2 className={Styles.Loggedin}> welcome {props.username}</h2>
   const Loggedout =  <h2 className={Styles.Loggedout}> welcome Guest! Please Login!</h2>


return (props.isLoggedin ? WelcomeMsg : Loggedout);
}

userGreeting.propTypes = {
    isLoggedin: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
    }

userGreeting.defaultProps = {
    isLoggedin: false,
    username: "Guest"
}
export default userGreeting;