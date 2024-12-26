import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0)
    
    const handleIncrement = () => {
        setValue((prevValue) => prevValue + 1)
    }
    const handledecrement = () => {
        setValue((prevValue) => prevValue - 1)
    }
    const handleReset = () => {
        setValue(0)
    }
    return (
        <div className="counter">
            <p>{value}</p>
            <button onClick={handleIncrement}>increament</button>
            <button onClick={handledecrement} disabled={value == 0}>decreament</button>
            <button onClick={handleReset} >reset</button>
        </div>

    )
}