import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [count, setCount] = useState<any>(0)
    const [change, setChange] = useState<any>(0)
    const prevName = useRef("")
    const [name, setName] = useState<any>("")
    
    useEffect(() => {
    //   setCount((prevCount: number) => prevCount+1)
      prevName.current = name
    }, [name])
    return (  
        <div>
            <h2>{count}</h2>
            <h2>{change}</h2> 
            <h2>{prevName.current}</h2> 
            <button onClick={()=>setChange((prevCount: number) => prevCount+1) }>x</button>
        
            <div>
                <input value ={name} onChange={e => setName(e.target.value)} />
                <h2>My name is {name} and used to be {prevName.current} </h2>
            </div>
        </div>

        
    )
}

export default UseRef

