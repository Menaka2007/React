import React, { useState } from 'react';

function Counter(){
    const [Count, setCount] = useState(0);
    return(
        <div>
            <h1>Counter</h1>
            <p>Count = {Count}</p>
            <button onClick={() => setCount(Count + 1)}>+</button>
            <button onClick={() => setCount(Count - 1)}>-</button>
        </div>
    )
} 
export default Counter;
