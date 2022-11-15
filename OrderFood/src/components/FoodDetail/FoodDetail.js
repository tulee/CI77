import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './FoodDetail.css';

export default function FoodDetail ({food}){
    const [amountDetailFood, setAmountDetailFood] = useState(1)
    const {cart, setCart} = useContext(ThemeContext)
    
    function handleChangeAmount(e){
        setAmountDetailFood(e.target.value)
    }

    function handleAddFood(e){
        e.preventDefault()
        const newItem = {
            id:food.id,
            name:food.name,
            amount:amountDetailFood,
            price:food.price
        }

        if(cart.length==0){
            setCart(prev => [...prev,newItem])
        }else{
            let index = cart.findIndex(e => e.id==newItem.id)
            if(index<0){
                setCart(prev => [...prev,newItem])
            }else{
                let cloneCart = [...cart]
                cloneCart[index].amount += parseInt(newItem.amount)
                setCart(cloneCart)
            }
        }
    }

    return (
        <div className="foodDetail">
            <img src={food.image}/>
            <div className="foodText">
                <div className="foodName">{food.name}</div>
                <div className="foodDes">{food.description}</div>
                <div className="foodPrice">{`$${food.price}`}</div>
            </div>
            <div className="foodControl">
                {/* <div className="foodAmountControl">
                    <div className="foodControlText">Amount</div>
                    <input className="foodAmountInput" type="number" min="1" />
                </div>
                <button className="addToCartBtn">+Add</button> */}
                <form className="foodAmountForm" onSubmit={handleAddFood}>
                    <label>
                        Amount
                        <input type="number" min={1} className="foodAmountInput" value={amountDetailFood} onChange={handleChangeAmount}/>
                    </label>
                    <input type="submit" value="+ Add" className="addCartBtn"/>
                </form>
            </div>
        </div>
    )
}