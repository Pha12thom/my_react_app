const List = () => {
    const Fruits= [
        {id: 1, name: "banana", calories: 30}, 
        {id: 2, name: "apple", calories: 40}, 
        {id: 3, name: "orange", calories: 20},
    ];

    Fruits.sort((a,b) => a.name.localeCompare(b.name));//sort with name
    Fruits.sort((a,b) => b.name.localeCompare(a.name));//sort from large letter
    Fruits.sort((a,b) => a.calories - b.calories);




    Fruits.sort((a,b) => b.calories - a.calories);

    const lowercales = Fruits.filter(fruit => fruit.calories < 30);
    const Highcal = Fruits.filter(fruit => fruit.calories > 30);

    //const Items = Fruits.map(fruit => <li key={fruit.id}>{fruit.name} - {fruit.calories}</li>)

    //const Items = lowercales.map(lowercale => <li key={lowercale.id}>{lowercale.name} - {lowercale.calories}</li>)
    const Items = Highcal.map(Highcal => <li key={Highcal.id}>{Highcal.name} - {Highcal.calories}</li>)

    return (<ol>{Items}</ol>);


}
export default List;