import React, { useState } from 'react'
import './../App.css'

function Boxwithshadow() {
    const [hori, sethori] = useState<any>(10)
    const [ver, setver] = useState<any>(10)
    const [blur, setblur] = useState<any>(10)
    const [color, setColor] = useState<any>("black")
    return (
        <div>
            <div className="controls">
                <label>Slider</label>
                <input type="range" min="0" max="100" value={hori} onChange={(e) => sethori(e.target.value)} />
                <input type="range" min="0" max="100" value={ver} onChange={(e) => setver(e.target.value)} />
                <input type="range" min="0" max="100" value={blur} onChange={(e) => setblur(e.target.value)} />
                <h1>{hori}</h1>
            </div>
            <div className="outputi"></div>
            <div className="boxi" style={{ boxShadow: `${hori}px ${ver}px ${blur}px ${color}` }}></div>
        </div>
    )
}

export default Boxwithshadow
