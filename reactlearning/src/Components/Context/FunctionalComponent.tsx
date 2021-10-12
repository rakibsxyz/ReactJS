import React, { useContext } from 'react'
import { useThemeContext, useThemeUpdateContext } from './ThemeContext'

function FunctionalComponent() {
    const darkTheme = useThemeContext()
    const toggleTheme = useThemeUpdateContext()
    const themeStyle  = {
        backgroundColor: darkTheme? '#333' : '#CCC',
        color: darkTheme? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
        <button onClick={toggleTheme}>Toggle theme </button>
        <div style={themeStyle}> Function Theme </div>
        </>
    )
}

export default FunctionalComponent
