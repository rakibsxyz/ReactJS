import React, { useState } from 'react'

function Darkmode(Props:any) {
    const [dark, setMode] = useState<any>(false)

    const change =():boolean=>{
        if(dark) return true;
        else return false;
    }
    return (

        <div className={dark? "nav": "App dark-mode"}>
            <label className="switch">
                <input type="checkbox" onChange={()=> setMode(!dark)} />
                <span className="slider round"></span>
            </label>

        </div>

    )
}
export default Darkmode
