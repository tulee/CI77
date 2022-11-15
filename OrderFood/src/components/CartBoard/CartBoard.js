import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import CartItem from "../CartItem/CartItem"
import './CartBoard.css';

export default function CartBoard(){
    const {cart, setCart,isViewCart, setIsViewCart,error, setError} = useContext(ThemeContext)
    const [totalMoney, setTotalMoney] = useState(0)
    const [inputs, setInputs] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const [isOrderSuccess, setIsOrderSuccess] = useState(false)

    function handleChange (e){
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values,[name]:value}))
    }

    const handlePostOrder = async (order) =>{
        setIsSubmitting(true)
        try {
			const response = await fetch(`https://c0c-react-db-connection-default-rtdb.firebaseio.com/orders.json`,
            {
                method: "POST",
                mode: "cors",
                cache:"no-cache",
                body:JSON.stringify(order),
            });
            
            if(!response.ok){
                setIsSubmitting(false)
                throw new Error("Something went wrong while submitting the order!")
            }
            console.log(response);

            setIsSubmitting(false)
            setIsOrderSuccess(true)
            setCart([])
            setInputs({})
            setIsVisible(false)
        } catch (err) {
            setError(err.message)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let currentTime = new Date()
        let order = {
            createdAt: currentTime.toLocaleString(),
            id:currentTime.getTime(),
            form:inputs,
            cart:cart
        }
        handlePostOrder(order)
        console.log(error);
    }

    function handleOrderClick(){
        setIsVisible(true)
    }

    function handleCloseCart(){
        setIsVisible(false)
        setInputs({})
        setIsViewCart(false)
        setIsOrderSuccess(false)
    }

    useEffect(()=>{
        let total = 0
        cart.forEach(e => {
            total += e.amount*e.price
        })
        setTotalMoney(total.toFixed(2))
    },[cart])

    return(
        <div className="carBoardOverlay" style={{display:isViewCart?"flex":"none"}}>
            <div className="cardBoard" >
                <div className="submitting" style={{display: isSubmitting? "block" : "none"}}>Sending order data...</div>
                <div className="submitSuccess" style={{display: isOrderSuccess?"flex":"none"}}>
                    <div>Successfully sent the order!</div>
                    <button onClick={handleCloseCart}>Close</button>
                </div>
                <div className="cartContainer" style={{display: (isSubmitting || isOrderSuccess)?"none":"flex"}}>
                    <div className="cartList">
                        {cart.map(item => {
                            return <CartItem item={item} key={item.id}/>
                        })}
                    </div>
                    <div className="cartSum">
                        <div className="cartSumTitle">Total Amount</div>
                        <div className="cartTotalMoney">${totalMoney}</div>
                    </div>
                    <div className="cartControl" style={{display:!isVisible?"flex":"none"}}>
                        <button className="closeCartBtn" onClick={handleCloseCart}>Close</button>
                        <button className="orderBtn" onClick={handleOrderClick}>Order</button>
                    </div>
                    <div className="orderForm" style={{display:isVisible?"flex":"none"}}>
                        <form onSubmit={handleSubmit}>
                            <label>Your Name</label>
                            <input 
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                type="text"
                            />
                            <label>Street</label>
                            <input 
                                name="street"
                                value={inputs.street || ""}
                                onChange={handleChange}
                                type="text"
                            />
                            <label>Postal code</label>
                            <input 
                                name="postal"
                                value={inputs.postal || ""}
                                onChange={handleChange}
                                type="number"
                            />
                            <label>City</label>
                            <input 
                                name="city"
                                value={inputs.city || ""}
                                onChange={handleChange}
                                type="text"
                            />
                            <div className="orderControl">
                                <button className="closeCartBtn" onClick={handleCloseCart}>Close</button>
                                <input type="submit" value="Confirm"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}