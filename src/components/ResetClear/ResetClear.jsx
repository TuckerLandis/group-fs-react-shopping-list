function ResetClear ({shoppingList, removeItem}) {

    const handleClear = () => {
        console.log('Clicked!');
        shoppingList.forEach(item => removeItem(item))
    }
    return (
        <>
            <button>Reset</button>
            <button onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;