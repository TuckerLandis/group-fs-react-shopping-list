import swal from 'sweetalert';

function ResetClear ({shoppingList, removeItem, resetPurchased}) {
    // function for the reset button event listener
    const handleReset = () => {
        swal({
            title: "Are You Sure?",
            text: "This will mark all your items as not purchased. This cannot be undone",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Yes, I am sure."]
        }).then( result => {
            if (result.value) {
                // iterate over each item in list and make a delete request for each one individually
                shoppingList.forEach(item => resetPurchased(item.id))
        }
    })
              
}
    // function for the clear button event listener
    const handleClear = () => {
        console.log('Clicked!');
        // iterate over each item in list and make a delete request for each one individually
        shoppingList.forEach(item => removeItem(item.id));
    }

    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;