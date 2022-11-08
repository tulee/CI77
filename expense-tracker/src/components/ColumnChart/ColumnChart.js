import "./ColumnChart.css";

export default function ColumnChart(props){
    let fillBarHeight='0%'
    if(props.maxAmount>0){
        fillBarHeight=Math.round(props.amount/props.maxAmount*100).toString() + '%'
    }
    return(
        <div className="column">
            <div className="columnBar">
                <div className="fillBar" style={{height:fillBarHeight}}></div>
            </div>
            <div className="titleColumn">{props.month}</div>
        </div>
    )
}