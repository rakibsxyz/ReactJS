import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'

function  HooverCounter (props:any)  {
   
    return (
        <div>
            <h2 onMouseOver={ props.increment }>Hover me and it counts {props.count} times Mr {props.name}</h2>
        </div>
    )
}

export default UpdatedComponent(HooverCounter)
