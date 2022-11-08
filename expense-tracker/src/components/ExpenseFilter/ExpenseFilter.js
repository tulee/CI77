import "./ExpenseFilter.css";

export default function ExpenseFilter (props){
    function handleClick(e){
        props.handleChangeFilter(e.target.value)
    }
    
    return (
        <div className="expenseFilter">
            <a className="titleFilter">Filter by year</a>
            <select className="filterYear" onChange={handleClick}>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
            </select>
        </div>
    )
}