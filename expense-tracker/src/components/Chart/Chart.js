import ColumnChart from "../ColumnChart/ColumnChart";
import "./Chart.css";

export default function Chart (props){
    const expenseMonth = [
        {month:'Jan', amount: 0},
        {month:'Feb', amount: 0},
        {month:'Mar', amount: 0},
        {month:'Apr', amount: 0},
        {month:'May', amount: 0},
        {month:'Jun', amount: 0},
        {month:'Jul', amount: 0},
        {month:'Aug', amount: 0},
        {month:'Sep', amount: 0},
        {month:'Oct', amount: 0},
        {month:'Nov', amount: 0},
        {month:'Dec', amount: 0}
    ]

    props.expense.forEach(item => expenseMonth[item.date.getMonth()].amount += item.amount)
    const amountList =  expenseMonth.map(e=>e.amount)
    
    let maxAmount = Math.max(...amountList)
    return (
        <div className="chartContainer">
            {expenseMonth.map(item => 
                <ColumnChart 
                    maxAmount={maxAmount}
                    month={item.month}
                    amount={item.amount}
                />)
            }
        </div>
    )
}