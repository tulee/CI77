import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import FilmDetail from "../FilmDetail/FilmDetail"
import './FilmList.css';

export default function FilmList (){
    const {error,setError,isLoading,setIsLoading,movies,setMovies,handleFetchDiscover,handleFetchSearch, searchTerm, setSearchTerm} = useContext(ThemeContext)

    useEffect(()=>{
        handleFetchDiscover()
    },[])

    // useEffect(()=>{
    //     handleFetchSearch(searchTerm)
    // },[searchTerm])

    return (
        <div className="filmListContainer">
            <h3>Film List</h3>
            <div className="filmList">
                {movies.map(movie => {
                    return (
                        <FilmDetail movie = {movie} />
                    )
                })}
            </div>
        </div>
    )
}