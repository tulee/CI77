import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import FoodDetail from "../FoodDetail/FoodDetail"
import './Content.css';

export default function Content(){
    const {foods,setFoods,handleFetchFoods,isLoading,setIsLoading} = useContext(ThemeContext)
    
    useEffect(()=>{
        handleFetchFoods()
    },[])

    return(
        <div className="content">
            <div className="welcome">
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from our brand selection of available meals and enjpy a delicious lunch or dinner at home.</p>
                <br />
                <p>All our meals are cooked with high-quality ingredients, just in-time and of course by experienced chefs!</p>
            </div>
            {
                isLoading && <div className="loading">Loading...</div>
            }
            {
                !isLoading &&
                <div className="foodList">
                    {foods.map(food => {
                        return <FoodDetail food={food} key={food.id}/>
                    })}
                </div>
            }
            {/* <div className="foodList">
                {foods.map(food => {
                    return <FoodDetail food={food} key={food.id}/>
                })}
            </div> */}
        </div>
    )
}