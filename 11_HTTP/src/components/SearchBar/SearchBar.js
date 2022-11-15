import './SearchBar.css';
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"

export default function SearchBar(){
    const [inputText, setInputText] = useState('')
    const { searchTerm, setSearchTerm } = useContext(ThemeContext)

    let navigate = useNavigate()

    function handleInput(e){
        setInputText(e.target.value)
    }

    function handleSearch(e){
        e.preventDefault()
        setSearchTerm(inputText)
        navigate(`/search/${inputText}`)
        setInputText('')
    }

    return (
        <div className="searchBar">
            <input className="searchInput" onChange={handleInput} value={inputText}/>
            <button className="searchBtn" onClick={handleSearch}>Search</button>
        </div>
    )
}