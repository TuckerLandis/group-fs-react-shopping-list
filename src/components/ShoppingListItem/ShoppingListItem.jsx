import './ShoppingListItem.css'
function ShoppingListItem (props) {


    return (
        <div className="ShoppingListItem">
            <p>{props.name}</p>
            <p>  </p>
            <p>{props.quantity} {props.unit}</p>
            <p>  </p>
            <button onClick={props.purchaseItem}> Purchase </button> 
            <p>  </p>
            <button onClick={props.deleteItem}> Remove </button> 
        </div>
    )
}

export default ShoppingListItem;