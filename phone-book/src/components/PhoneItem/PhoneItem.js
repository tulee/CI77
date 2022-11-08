import "./PhoneItem.css";

function PhoneItem(props) {
    return (
        <li className={`contactItem ${props.isChoose ? "bg-blue" : ""}`} onClick={props.handleChoose}>
            <a className="name">{props.name}</a>
            <a className="phone">{props.phone}</a>
        </li>
    )
}

export default PhoneItem