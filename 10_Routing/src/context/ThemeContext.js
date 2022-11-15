import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeContextProvider(props){
    const [isLogin, setIsLogin] = useState(false)
    
    return (
        <ThemeContext.Provider value={{isLogin,setIsLogin}}>
            {props.children}
        </ThemeContext.Provider>
    )
}