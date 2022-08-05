import {createContext, ReactNode, useCallback, useMemo, useState} from "react";

type CreateContext = {
    theme: string,
    switchTheme: (theme: string) => void
}

export const ThemeContext = createContext<CreateContext>({
    theme: 'white',
    switchTheme: (theme: string) => null,
})


const ThemeProvider: React.FC<ReactNode> = ({children}) => {
    const [theme, setTheme] = useState<string>('white')


    const switchTheme = useCallback((theme: string) => {
        setTheme(theme === 'white' ? 'black' : 'white')
        document.body.classList.toggle('dark');
    }, [theme])

    const providerValue = useMemo(() => ({theme, switchTheme}), [theme, switchTheme])
    return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider