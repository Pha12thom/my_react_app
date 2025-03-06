const List = () => {
    const Fruits= [
        {name: "banana", calories: 30}, 
        {name: "apple", calories: 40}, 
        {name: "orange", calories: 20},
    ];
    const Items = Fruits.map(fruit => <li key={fruit.name}>{fruit.name} - {fruit.calories}</li>)
    
    return (<ol>{Items}</ol>);


}
export default List;