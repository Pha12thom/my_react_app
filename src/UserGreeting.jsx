const userGreeting =(props) => {
    return (props.isLoggedin) ? <h2> Welcome {props.username} </h2> : <h2> Welcome Guest please login</h2>
}

export default userGreeting;