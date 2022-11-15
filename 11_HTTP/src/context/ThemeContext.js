import { createContext, useState } from "react";
import { apiKey } from "../api/config";

export const ThemeContext = createContext()
    
export default function PhotoContextProvider(props) {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const handleFetchDiscover = async () =>{
        try {
            setIsLoading(true)
			const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`);
			const data = await response.json();
			setMovies(data.results)
			setIsLoading(false)
        } catch (err) {
            setError(err.message)
			setIsLoading(false)
        }
    }

    const handleFetchSearch = async (searchTerm) =>{
        try {
            setIsLoading(true)
			const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1`);
			const data = await response.json();
			setMovies(data.results)
            console.log(data.results);
			setIsLoading(false)
        } catch (err) {
            setError(err.message)
			setIsLoading(false)
        }
    }

    return (
        <ThemeContext.Provider value={{error,setError,isLoading,setIsLoading,movies,setMovies,handleFetchDiscover,handleFetchSearch,searchTerm, setSearchTerm}}>
            {props.children}
        </ThemeContext.Provider>
    )
}