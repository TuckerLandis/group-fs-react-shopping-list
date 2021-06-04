import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

function ShoppingList({shoppingList}) {
    return (
        <>
            <h2 className="ShoppingListHeader">Shopping List</h2>
            <div className="ShoppingList">
                {shoppingList.map(item =>
                    <ShoppingListItem key={item.id} name={item.name} quantity={item.quantity} unit={item.unit}/>)}
            </div>
        </>
    ) // end return
} // end ShoppingList fn

export default ShoppingList; // export to App