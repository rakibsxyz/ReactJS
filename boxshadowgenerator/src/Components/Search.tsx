import React, { useState } from 'react'

function Search(Porps: any) {
    const [search, setSearch] = useState<any>("")
    return (
        <div className="Unsplash">
            <span>Search</span>
            <input type="text" name="search" className="Search" style={{ width: "60%" }} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={()=> Porps.onSendClick(search)}>Send</button>
        </div>
    )
}

export default Search
