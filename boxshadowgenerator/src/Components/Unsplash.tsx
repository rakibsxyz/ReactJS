import React, { useState } from 'react'
import Search from './Search'

function Unsplash() {
    const [images, setImages] = useState<any>([])
    const [imageResults, setImageResults] = useState<any>([])

    const onSearchSend = (searchText: any) => {
        console.log(searchText)
        fetch(`https://api.unsplash.com/search/photos?client_id=EHCkrxohpaxWbkZy_acgXaJv-PLUQmA5wp2tBBGCjOc&query=${searchText}&orientation=squarish`)
            // EHCkrxohpaxWbkZy_acgXaJv-PLUQmA5wp2tBBGCjOc
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setImageResults(res.results)
                // console.log(imageResults[0].urls)
            })
    }

    return (
        <div style={{ width: "100%" }} >
            <Search onSendClick={onSearchSend} />
            <div className="gallary" >
                {imageResults && imageResults.map((image: any) => {
                    return <div> <img className="image" key={image.id} src={image.urls.regular} />
                    </div>

                })
                }
            </div>

        </div>
    )
}

export default Unsplash
