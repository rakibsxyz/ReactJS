import React from 'react'
import FunctionalComponent from './FunctionalComponent'
import ThemeProvider from './ThemeContext'

function UseContextComponent() {
    return (
        <>
            <ThemeProvider>
                <FunctionalComponent />
            </ThemeProvider>
        </>
    )
}

export default UseContextComponent
