import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['blue', 'pink','orange'];
    const randomColor = colors[Math.floor(Math.random()*2)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
    
}

export default Rainbow