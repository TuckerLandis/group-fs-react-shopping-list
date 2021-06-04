import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

function ShoppingList({shoppingList}) {
    return (
        <>
            <h2>Shopping List</h2>
            <div>
                <ShoppingListItem />
            </div>
        </>
    ) // end return
} // end ShoppingList fn

export default ShoppingList; // export to App