import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

export default function Register(){
    const {isLogin, setIsLogin} = useContext(ThemeContext)
    const navigate = useNavigate()

    function handleRegister(){
        setIsLogin(true)
        navigate("/")
    }

    return(
        <div>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}