import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Header.css';

export default function Header () {
    const [headerTitle, setHeaderTitle] = useState('Đăng Nhập')
    const {isLogin,setIsLogin,language,setLanguage,userName,setUserName} = useContext(ThemeContext)

    useEffect(()=>{
        if(!isLogin){
            if(language == "VI"){
                setHeaderTitle("Đăng Nhập")
            }else {
                setHeaderTitle("Login")
            }
        } else{
            if(language == "VI"){
                setHeaderTitle(`Xin chào ${userName}`)
            }else {
                setHeaderTitle(`Welcome ${userName}`)
            }
        }
    },[isLogin,language])

    return(
        <div className='header'>
          <div className='logo'>MindX</div>
          <div className='headerTitle'>{headerTitle}</div>
        </div>
    )
}
