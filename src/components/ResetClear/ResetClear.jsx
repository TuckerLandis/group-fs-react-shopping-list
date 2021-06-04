import swal from 'sweetalert';

function ResetClear ({shoppingList, removeItem, resetPurchased}) {
    // function for the reset button event listener
    const handleReset = () => {
        console.log('Clicked!');
        // iterate over each item in list and make a delete request for each one individually
        
        shoppingList.forEach(item => resetPurchased(item.id));
    }
    // function for the clear button event listener
    const handleClear = () => {
        console.log('Clicked!');
        // iterate over each item in list and make a delete request for each one individually
        shoppingList.forEach(item => removeItem(item.id));
    }

    return (
        <>
            <button className="btn btn-warning" onClick={handleReset}>Reset</button>
            <button className="btn btn-danger" onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;