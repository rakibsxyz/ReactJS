import React,{useState}from 'react'
import Search from './Search'

function Unsplash() {
    const [images, setImages] = useState<any>([])

    const onSearchSend = (searchText:any) =>{
        console.log(searchText)
        fetch(`https://api.unsplash.com/search/photos&query=${searchText}/?client_id=EHCkrxohpaxWbkZy_acgXaJv-PLUQmA5wp2tBBGCjOc`)
        // EHCkrxohpaxWbkZy_acgXaJv-PLUQmA5wp2tBBGCjOc
    }

    return (
        <div style={{width:"100%"}} >
            <Search onSendClick={onSearchSend}/>   
        </div>
    )
}

export default Unsplash
