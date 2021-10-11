import React, { useState } from 'react'

function HooverCounter() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h2 onMouseOver={()=> setCount(prev => prev + 1 )}>Hover me and it counts {count} times</h2>
        </div>
    )
}

export default HooverCounter
