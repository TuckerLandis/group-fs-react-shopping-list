import './ShoppingListItem.css'
// import swal from '@sweetalert/with-react';

function ShoppingListItem(props) {

    const purchaseHandler = (id) => {
        console.log('Clicked Purchase!');
        props.purchaseItem(id);
    }

    const removeHandler = (id) => {
        console.log('Clicked remove!');
        props.removeItem(id);
    }

    
    const ifPurchased = () => {
        if (!props.purchased) {
            return (<>
                    <button onClick={() => purchaseHandler(props.id)}> Purchase </button>
                        <p>  </p>
                     <button onClick={() => removeHandler(props.id)}> Remove </button>
                 </>
            )
        } else {
            return (
                <p> Purchased </p>
            )
        }
    }
    // console.log('Checking props purchased', props.purchased);
    // console.log('Props in ShoppingListItem are:', props);
    return (
        <div className="ShoppingListItem">
            <p>{props.name}</p>
            <p>  </p>
            <p>{props.quantity} {props.unit}</p>
            <p>  </p>
            {ifPurchased()}
        </div>
    )
}

export default ShoppingListItem;