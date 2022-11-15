import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Content.css';

export default function Content (){
    const [headerForm,setHeaderForm] = useState("Đăng Nhập")
    const [logoutBtnText,setLogoutBtnText] = useState("Đăng xuất")
    // const [visible, setVisible] = useState(true)
    const [inputText, setInputText] = useState('')
    const {isLogin,setIsLogin,language,setLanguage,userName,setUserName} = useContext(ThemeContext)
    const [textNotice,setTextNotice] = useState('Xin Chào Thế Giới Tôi Ra Hang Đây')

    function handleInput(e){
        setInputText(e.target.value)
    }

    function handleSubmit(){
        if(inputText==''){
            if(language=="VI"){
                alert('Không được để trống username')
            }else{
                alert('Username required')
            }
        }else{
            setUserName(inputText)
            setIsLogin(true)
            setInputText('')
        }
        
    }

    function handleLogout(){
        setIsLogin(false)
    }

    useEffect(()=>{
        if(!isLogin){
            if(language == "VI"){
                setHeaderForm("Đăng Nhập")
            }else {
                setHeaderForm("Login")
            }
        } else{
            if(language == "VI"){
                setLogoutBtnText("Đăng Xuất")
                setTextNotice('Xin Chào Thế Giới Tôi Ra Hang Đây')
            }else {
                setLogoutBtnText("Logout")
                setTextNotice('Hello World, I am coming')
            } 
        }
    },[isLogin,language])


    return(
        <div className="content">
            <div className="loginForm" style={{display: isLogin ? "none" : "inline-block"}}>
                <div className="headForm">{headerForm}</div>
                <div className="bodyForm">
                    <input className="inputUserName" onChange={handleInput} value={inputText} placeholder="username..."/>
                    <button className="formBtn" onClick={handleSubmit}>{headerForm}</button>
                </div>
            </div>
            <div className="welcomeNotice" style={{display: !isLogin ? "none" : "flex"}}>
                <div className="textNotice">{textNotice}</div>
                <button className="formBtn" onClick={handleLogout}>{logoutBtnText}</button>
            </div>
        </div>
    )
}