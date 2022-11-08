import { useState } from "react"
import AddExpense from "../AddExpense/AddExpense"
import Chart from "../Chart/Chart"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"
import ExpenseItem from "../ExpenseItem/ExpenseItem"

import "./ExpenseTracker.css";

function ExpenseTracker () {
    const exampleItem = [{
        id:1,
        date: new Date(2022, 7, 18),
        title: 'Book',
        amount:45
    }]

    const [expenseList, setExpenseList] = useState(exampleItem)
    const [yearFilter,setYearFilter] = useState(2022)

    function handleAddExpense(item) {
        setExpenseList([...expenseList,item])
    }

    function handleChangeFilter(e){
        setYearFilter(e)
    }
    
    return (
        <div className="appContainer">
            <AddExpense handleAddExpense={handleAddExpense}/>
            <div className="expenseInfo">
                <ExpenseFilter handleChangeFilter={handleChangeFilter}/>
                <Chart expense={expenseList.filter((item)=> item.date.getFullYear() == yearFilter)}/>
                <div className="expenseList">
                    {
                        expenseList
                            .filter((item)=> item.date.getFullYear() == yearFilter)
                            .map((item) =>
                                <ExpenseItem
                                    key={item.id}
                                    date={item.date}
                                    title={item.title}
                                    amount={item.amount}
                                />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpenseTracker