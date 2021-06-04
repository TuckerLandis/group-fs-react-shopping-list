import './ShoppingListItem.css'
// import swal from '@sweetalert/with-react';

function ShoppingListItem(props) {


    const ifPurchased = (props) => {
        if (!props.purchased) {
            return (<>
                    <button onClick={props.purchaseItem}> Purchase </button>
                        <p>  </p>
                     <button onClick={props.deleteItem}> Remove </button>
                 </>
            )
        } else {
            return (
                <p> Purchased </p>
            )
        }
    }

    return (
        <div className="ShoppingListItem">
            <p>{props.name}</p>
            <p>  </p>
            <p>{props.quantity} {props.unit}</p>
            <p>  </p>
            {ifPurchased(props)}
        </div>
    )
}

export default ShoppingListItem;