import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function DummyData() {

    const [playlist, setPlaylist] = useState<any>([])

    const fetchData = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) =>{
                console.log(json)
                setPlaylist(json)
            
            } );
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1> Coming </h1>
            {
                playlist.map((item:any)=>{
                    return <Link to ={`/posts/${item.id}`}> {JSON.stringify(item.title)} </Link>
                })
            }
           
        </div>
    )
}

export default DummyData
