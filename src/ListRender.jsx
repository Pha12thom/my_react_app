const ListRender = (props) => {
    const myitems = props.items;
    

    const itemlist = myitems.map(item => <li key={item.id}> {item.name} {item.calories}</li>);
   itemlist.filter(item => item.calories < 30);
   

    return (
        <div>
       
        <ol>{itemlist}</ol> 
        <ul></ul>
        </div>
    );
}

export default ListRender;