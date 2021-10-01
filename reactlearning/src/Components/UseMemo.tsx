import React, { useState,useMemo } from 'react'

function UseMemo() {

    const [number, setNumber] = useState<number>(0)
    const [dark, setDark] = useState<boolean>(false)
    const doubleNumber = useMemo(() =>{
        return slowFunction(number)
    },[number])
    

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={()=> setDark(prevDark => !prevDark)}>change theme</button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>

        </>
    )
}

function slowFunction(num: number) {
    console.log("calling slow function")
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2

}
export default UseMemo

// only use for performance optimization, it uses additional memory and additonal function call....so dont use it everywhere :)
