import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import FilmDetail from "../FilmDetail/FilmDetail"

export default function FilmSeachList (){
    const {error,setError,isLoading,setIsLoading,movies,setMovies,handleFetchDiscover,handleFetchSearch} = useContext(ThemeContext)
    const { searchTerm } = useParams()

    useEffect(()=>{
        handleFetchSearch(searchTerm)
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
                                <FilmDetail movie = {movie}  key = {movie.id}/>
                        )
                    })}
            </div>
        </div>
    )
}