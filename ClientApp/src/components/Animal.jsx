import { useEffect, useState } from 'react';

const Animal = () => {

    const [name, setName] = useState("dog")

    const writeInConsole = () => {
        setName("frog")
        console.log("1. name has changed " + name )
    }

    useEffect(() => {
        console.log("2. name has changed " + name)
    }, [name]) //this function is executed every time 'name' change its state

    useEffect(() => {
        console.log("applications has started")
    }, []) //empty brackets means that this effect will execute when the app begin for 1st time

    return (
        <div>
            <h1>Actual name is: {name}</h1>
            <button onClick={ writeInConsole }>Change name</button>
        </div>
    )
}

export default Animal;