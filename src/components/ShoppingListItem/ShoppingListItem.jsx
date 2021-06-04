function ShoppingListItem (props) {


    return (
        <div>
            <p>{props.item.name}</p>
            <p>  </p>
            <p>{props.item.quantity} {props.item.unit}</p>
            <p>  </p>
            <button onClick={props.purchaseItem}> Purchase </button> <button onClick={props.deleteItem}> Remove </button> 
        </div>
    )
}

export default ShoppingListItem;