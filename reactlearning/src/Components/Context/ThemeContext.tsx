import React, { createContext, useContext, useState } from 'react'

const ThemeContext = React.createContext(false)
const ThemeUpdateContext = React.createContext<any>({} as any)


export function useThemeContext() {
    return useContext(ThemeContext)
}

export function useThemeUpdateContext() {
    return useContext(ThemeUpdateContext)
}

function ThemeProvider({ children }: { children: any }) {

    const [darkTheme, setDarkTheme] = useState<boolean>(true)
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
// Context Template which values will be used by other components