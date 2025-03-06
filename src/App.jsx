import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"

function App() {
  return (
    <>
    <Header />
    <List />
    <UserGreeting isLoggedin={true} username="Milugo"/>
    <Student/>
    <Student name="Milugo" age={23} isStudent={true}/>
    <Student name="victoria" age={23} isStudent={true}/>
    <Card/>
    <Card/>
    <Card/>
    <Footer />
    </>
  )
}

export default App
