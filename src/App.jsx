import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"

function App() {
  return (
    <>
    <Header />
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
