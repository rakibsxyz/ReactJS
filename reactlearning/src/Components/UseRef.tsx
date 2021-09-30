import React, { useEffect, useState } from 'react'

function UseRef() {
    const [count, setCount] = useState<any>(0)
    const [change, setChange] = useState<any>(0)
    
    useEffect(() => {
      setCount((prevCount: number) => prevCount+1)
    }, [])
    return (
        <div>
            <h2>{count}</h2>
            <h2>{change}</h2>
            <button onClick={()=>setChange((prevCount: number) => prevCount+1) }></button>
        </div>
    )
}

export default UseRef

