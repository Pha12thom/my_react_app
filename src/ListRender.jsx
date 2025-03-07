import PropTypes from "prop-types";

const ListRender = (props) => {
    const myitems = props.items;
    const category = props.category;
    
    const lesscal = myitems.filter(item => item.calories < 30);
    const itemlist = lesscal.map(item => <li key={item.id}> {item.name} {item.calories}</li>);
    

   

    return (
        <div>
        <h2>{category}</h2>
        <ol>{itemlist}</ol> 
        <ul></ul>
        </div>
    );
}

ListRender.PropTypes = {
    items: PropTypes.array,
    category: PropTypes.string
}



ListRender.defaultProps = {
    items: [],
    category: "Category"
}

export default ListRender;