import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Footer.css';

export default function Footer(){
    const {isLogin,setIsLogin,language,setLanguage,userName,setUserName} = useContext(ThemeContext)
    
    function handleSelect(e){
        setLanguage(e.target.value)
        console.log(language);
    }
    return(
        <div className="footerBar">
            <select className="languageSelect" onChange={handleSelect}>
                <option value="VI">VI</option>
                <option value="EN">EN</option>
            </select>
        </div>
    )
}