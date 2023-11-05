import { useState } from 'react'

//creating component with 'function'
export default
    function MyButton() {

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className="btn btn-success" onClick={handleClick}>You clicked {count} times </button>
    )
}