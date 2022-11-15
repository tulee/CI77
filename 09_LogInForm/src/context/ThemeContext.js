import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeContextProvider(props){
    const [isLogin, setIsLogin] = useState(false)
    const [language, setLanguage] = useState('VI')
    const [userName, setUserName] = useState('')
    
    return (
        <ThemeContext.Provider value={{isLogin,setIsLogin,language,setLanguage,userName,setUserName}}>
            {props.children}
        </ThemeContext.Provider>
    )
}