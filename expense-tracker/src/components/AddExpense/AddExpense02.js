import { useState } from "react"
import DatePicker from "react-datepicker"
import "./AddExpense.css";


import "react-datepicker/dist/react-datepicker.css"

export default function AddExpense02(props){
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const [expenseDate,setExpenseDate] = useState("")
    const [toggleAddForm, setToggleAddForm] = useState(false)

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleAmount(e) {
        setAmount(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newItemExpense = {
            id:Date.now(),
            date:new Date(expenseDate),
            title:title,
            amount:amount
        }

        props.handleAddExpense(newItemExpense)

        setTitle("")
        setAmount("")
        setExpenseDate("")
    }

    function handleDateChange(e) {
        setExpenseDate(e.target.value)
    }

    function handleCancel(e){
        e.preventDefault()
        setToggleAddForm(!toggleAddForm)

        setTitle("")
        setAmount("")
        setExpenseDate("")
    }

    return (
        <div className="addBar">
            <button 
                className={`newExpenseBtn ${toggleAddForm ? "hidden" : ""}`}
                onClick={()=>setToggleAddForm(!toggleAddForm)}    
            >Add New Expense</button>
            <form className={`addForm ${toggleAddForm ? "" : "hidden"}`} onSubmit={handleSubmit}>
                <div className="addFields">
                    <div className="expenseField">
                        <label className="fieldTitle">Title</label>
                        <input 
                            onChange={handleTitle} 
                            type="text" 
                            value={title}
                        />
                    </div>
                    <div className="expenseField">
                        <label className="fieldTitle">Amount</label>
                        <input 
                            onChange={handleAmount} 
                            type="number" 
                            min="0.01"
                            step="0.01"
                            value={amount}
                        />
                    </div>
                    <div className="expenseField">
                        <label className="fieldTitle">Date</label>
                        <input 
                            type="date"
                            min="2019-01-01"
                            step="2022-12-31"
                            value={expenseDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className="addOrders">
                    <button onClick={handleCancel}>Cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    )
}