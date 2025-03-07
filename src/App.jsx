import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ListRender from "./ListRender.jsx"

function App() {
  const Fruits = [
    { id: 1, name: "banana", calories: 30 },
    { id: 2, name: "apple", calories: 40 },
    { id: 3, name: "orange", calories: 20 },
  ];
  const Vegetables = [
    { id: 1, name: "carrot", calories: 20 },
    { id: 2, name: "broccoli", calories: 30 },
    { id: 3, name: "potato", calories: 30 },
  ];

  return (
    <>
      <Header />
      <ListRender items={Vegetables} category="Vegetables" />
      <ListRender items={Fruits} category="Fruits" />
      <UserGreeting isLoggedin={true} username="Milugo" />
      <Student />
      <Student name="Milugo" age={23} isStudent={true} />
      <Student name="victoria" age={23} isStudent={true} />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}

export default App;
