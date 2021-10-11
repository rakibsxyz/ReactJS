import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'

function ClickCouner(props:any) {

   
    return (
        <div>
            <button onClick={props.increment }>You Clicked me {props.count} times</button>
        </div>
    )
}

export default UpdatedComponent(ClickCouner)
