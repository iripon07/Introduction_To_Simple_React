import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const handleAdd = () =>{
        setCount(count +1)
    }
  return (
    <div style={{border:'1px solid tomato'}}>
        <h3>Counter: {count}</h3>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Counter