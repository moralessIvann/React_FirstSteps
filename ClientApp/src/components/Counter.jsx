import { useState } from 'react'

//creating component with 'function'
export default
    function Counter() {

    const [count, setCount] = useState(0);
    function clickCounter() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(0);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={clickCounter}>You clicked {count} times </button>
            <button className="btn btn-primary" onClick={resetCounter}>Reset</button>
        </div>

    )
}