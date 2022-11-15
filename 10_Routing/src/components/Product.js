import { NavLink, Outlet } from "react-router-dom";

export default function Product (){
    return (
        <div>
            <h3>Products Page</h3>
            <div className="productList">
                <ul>
                    <li>
                        <NavLink to="/products/01">Product 01</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/02">Product 02</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}