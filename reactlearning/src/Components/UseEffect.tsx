import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [resourceType, setResourceType] = useState<string>("posts")
    const [items, setItems] = useState<any>([])

    console.log("Render")
    useEffect(() => {
        console.log("initial render")

        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) =>{
                console.log(json)
                setItems(json)
            
            } );

        return () => {
            console.log("clean up function which is use for unmounting")
        }

    }, [resourceType])
    return (
        <>
            <div>
                <button onClick={() => setResourceType("posts")}> Posts</button>
                <button onClick={() => setResourceType("comments")}> Comments</button>
                <button onClick={() => setResourceType("users")}> Users</button>
            </div>
            <h1>{resourceType}</h1>
            {
                items.map((item:any)=>{
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }
        </>
    )
}

export default UseEffect
