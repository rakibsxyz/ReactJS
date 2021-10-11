import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function SinglePost(props:any) {

    const [song, setSong] = useState<any>([])
    const fetchData = async () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((response) => response.json())
            .then((json) =>{
                console.log(json)
                setSong(json)
            
            } );
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1> Coming </h1>
            <h3>{song.title}</h3>
           
        </div>
    )
}

export default SinglePost
