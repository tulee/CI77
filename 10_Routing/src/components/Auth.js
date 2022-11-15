import { NavLink, Outlet } from "react-router-dom";

export default function Auth(){
    return(
        <div>
            <h1>Hello</h1>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/auth/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/register">Register</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}