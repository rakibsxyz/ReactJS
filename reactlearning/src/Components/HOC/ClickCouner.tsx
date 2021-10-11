import React, { useState } from 'react'

function ClickCouner() {

    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <button onClick={()=> setCount(prevCount => prevCount + 1 )}>You Clicked me {count} times</button>
        </div>
    )
}

export default ClickCouner
