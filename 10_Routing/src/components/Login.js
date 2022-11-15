import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext"

export default function Login(){
    const {isLogin, setIsLogin} = useContext(ThemeContext)
    const navigate = useNavigate();

    function handleLogin(){
        setIsLogin(true)
        navigate("/")
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}