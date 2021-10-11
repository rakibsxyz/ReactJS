import React, { useState } from 'react'

const UpdatedComponent = (OriginalComponent: any) => {


    const NewComponent = () => {

        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }
        
        const [count, setCount] = useState<number>(0)
        return <OriginalComponent name="rakib" count={count} increment={increment} />
    }
    return (
        NewComponent
    )
}

export default UpdatedComponent
