import { createContext, useState } from "react";

export const ThemeContext = createContext()
    
export default function PhotoContextProvider(props) {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [foods, setFoods] = useState([])
    const [cart, setCart] = useState([])
    const [isViewCart, setIsViewCart] = useState(false)

    const handleFetchFoods = async () =>{
        try {
            setIsLoading(true)
			const response = await fetch(`https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals`);
            const data = await response.json()
			setFoods(data.slice(0,4))
			setIsLoading(false)
        } catch (err) {
            setError(err.message)
			setIsLoading(false)
        }
    }

    return (
        <ThemeContext.Provider value={{error,setError,isLoading,setIsLoading,foods,setFoods,handleFetchFoods,cart, setCart,isViewCart, setIsViewCart}}>
            {props.children}
        </ThemeContext.Provider>
    )
}