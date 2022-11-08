import "./ExpenseItem.css";

export default function ExpenseItem(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    // const year = props.date.toLocaleString("en-US", { year: "interger" });
    return (
        <div className="expenseItem" >
            <div className="expenseDate">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expenseTitle">{props.title}</div>
            <div className="expenseAmount">{`$${props.amount}`}</div>
        </div>
    )
}
