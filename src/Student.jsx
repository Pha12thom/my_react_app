import Styles from "./Styles/student.module.css"

const Student = (props)=> {
    return (
    <div className={Styles.student}>
        <p> Name: {props.name} </p>
        <p>Age: {props.age}</p>
        <p> IsStudent: {props.isStudent ? "yes" : "No"}</p>
        
    </div>
    
    );
}

export default Student;