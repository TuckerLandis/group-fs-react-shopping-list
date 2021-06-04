import {useState} from 'react';
import axios from 'axios';

import './ShoppingForm.css'
function ShoppingForm({addToList}){

    const [shoppingItem, setShoppingItem] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemUnit, setItemUnit] = useState('');

    // ⬇ Handling the submit button
    const handleSave = (event) => {
        // ⬇ preventing the page from refreshing
        event.preventDefault();

        // ⬇ The user's inputs as a new object
        const newFoodItem = {
            name: shoppingItem,
            quantity: itemQuantity,
            unit: itemUnit
        }

        // ⬇ Call the addToList function from App.jsx and passing it the newFoodItem
        addToList(newFoodItem);
    }

    return(
        <>
        <h2 className="ShoppingFormHeader">Add An Item</h2>
        <form onSubmit={handleSave} className="ShoppingForm">
            <label>Item</label>
            <input 
                onChange={(event) => setShoppingItem(event.target.value)}
                value={shoppingItem}
            />
            <label>Quantity</label>
            <input
                onChange={(event) => setItemQuantity(event.target.value)}
                value={itemQuantity}
            />
            <label>Unit</label>
            <input
                onChange={(event) => setItemUnit(event.target.value)}
                value={itemUnit}
            />
            <button className="btn btn-success" type="submit">Save</button>
        </form>
        </>
    )
}
export default ShoppingForm;