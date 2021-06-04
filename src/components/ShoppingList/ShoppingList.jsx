import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

function ShoppingList({shoppingList, removeItem, purchaseItem}) {
    // console.log('Props inside ShoppingList', );
    return (
        <>
            
            <div className="ShoppingList">
                {shoppingList.map(item =>
                    <ShoppingListItem key={item.id} name={item.name} quantity={item.quantity} unit={item.unit} removeItem={removeItem} purchaseItem={purchaseItem} id={item.id} purchased={item.purchased}/>)}
            </div>
        </>
    ) // end return
} // end ShoppingList fn

export default ShoppingList; // export to App

