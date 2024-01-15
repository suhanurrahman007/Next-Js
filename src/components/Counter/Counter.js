import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className='btn btn-accent btn-sm'>Incise</button>
            <button onClick={() => setCounter(counter - 1)} className='btn btn-accent btn-sm'>Decide</button>
        </div>
    );
};

export default Counter;