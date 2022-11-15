import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Header.css';

export default function Header(){
    const {cart, setCart,isViewCart, setIsViewCart} = useContext(ThemeContext)
    const [totalAmount, setTotalAmount] = useState(0)
    const [isCartChange, setIsCartChange] = useState(false)

    function handleOpenCart(){
        setIsViewCart(true)
    }

    useEffect(()=>{
        let total =0
        cart.forEach(e => {
            total += parseInt(e.amount)
            // totalAmount = totalAmount + parseInt(e.amount)
        })
        setTotalAmount(total)

        if(total == 0){
            return
        }

        setIsCartChange(true)

        const timer = setTimeout(()=>{
            setIsCartChange(false)
        },500)

        return () =>{
            clearTimeout(timer)
        }
        
    },[cart])
    return(
        <div className="header">
            <div className="logo">ReactMeals</div>
            <button className="cartBtn" onClick={handleOpenCart} style={{animation: isCartChange? "aniCartBtn 0.3s" : "none"}}>
                <i class="fa fa-shopping-cart"></i>
                <div className="cartBtnText">Your Cart</div>
                <div class="cartAmountText">{totalAmount}</div>
            </button>
        </div>
    )
}
