function ResetClear ({shoppingList}) {

    const handleClear = () => {
        console.log('Clicked!');
    }
    return (
        <>
            <button>Reset</button>
            <button onClick={handleClear}>Clear List</button>
        </>
    )
}

export default ResetClear;