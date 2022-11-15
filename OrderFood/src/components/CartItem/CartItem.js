import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './CartItem.css';

export default function CartItem({item}){
    let itemMoney = (item.price * item.amount).toFixed(2)
    const {cart,setCart} = useContext(ThemeContext)

    function removeItem(idx){
        let cloneCart = [...cart]
        cloneCart.splice(cart.findIndex(e=>e.id==idx),1)
        setCart(cloneCart)
    }

    function handleIncClick(){
        item.amount +=1
        let cloneCart = cart.map(e=>(e.id==item.id?{...e,amount:item.amount}:e))
        setCart(cloneCart)
    }

    function handleDecClick(){
        item.amount -=1
        console.log(item.amount);
        if(item.amount<=0){
            //remove item
            removeItem(item.id)
        }else{
            let cloneCart = cart.map(e=>(e.id==item.id?{...e,amount:item.amount}:e))
            setCart(cloneCart)
        }
    }
    return(
        <div className="cartItem">
            <div className="cartItemLeft">
                <div className="cartItemName">{item.name}</div>
                <div className="cartCal">
                    <div className="cartItemMoney">{`$${itemMoney}`}</div>
                    <div className="cartItemAmount">{`x ${item.amount}`}</div>
                </div>
            </div>
            <div className="cartItemRight">
                <button className="itemDecBtn" onClick={handleDecClick}>-</button>
                <button className="itemIncBtn" onClick={handleIncClick}>+</button>
            </div>
        </div>
    )
}