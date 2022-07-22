import {createContext, useMemo, useState} from "react";

export const ThemeContext = createContext<any | null>(null)


const ThemeProvider: React.FC<any> = ({children}) => {
    const [theme, setTheme] = useState<null | string>(null)


    const whiteTheme = () => {
        setTheme('white')
    }

    const blackTheme = () => {
        setTheme('black')
    }

    const providerValue = useMemo(() => ({theme, whiteTheme, blackTheme}), [theme, whiteTheme, blackTheme])
    return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider