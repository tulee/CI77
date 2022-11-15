// import { useContext, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../context/ThemeContext";

export default function Shop(){
    // const {isLogin, setIsLogin} = useContext(ThemeContext)
    // const navigate = useNavigate()
    // useEffect(()=>{

    // },[])

    return(
        <div>
            <h1>Welcome ^^</h1>
            <div className="menuShop">
                <ul>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/invoices">Invoices</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}