import Styles from "./styles/student.module.css"
import PropTypes from 'prop-types';

const Student = (props)=> {
    return (
    <div className={Styles.student}>
        <p> Name: {props.name} </p>
        <p>Age: {props.age}</p>
        <p> IsStudent: {props.isStudent ? "yes" : "No"}</p>
        
    </div>
    
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Anonymous",
    age: 0,
    isStudent: false,
}
export default Student;