import { useState } from "react"
import "./InputItem.css";

function InputItem(props) {
    const [itemName, setItemName] = useState("")
    const [itemPhone, setItemPhone] = useState("")

    function handleNameInput(e) {
        setItemName(e.target.value)
    }

    function handlePhoneInput(e) {
        setItemPhone(e.target.value)
    }

    function handleClickAdd (){
        let item  = {
            id:Date.now(),
            name: itemName,
            phone: itemPhone,
            isChoose: false
        }

        props.handleAddItem(item)

        setItemName("")
        setItemPhone("")
    }

    return (
        <div className="inputItemBar">
            <input 
                className="inputName" 
                placeholder="Name" 
                type="text"
                onChange={handleNameInput}
                value={itemName}
            />
            <input 
                className="inputPhone" 
                placeholder="Phone" 
                type="tel"
                onChange={handlePhoneInput}
                value={itemPhone}
            />
            <button className="addBtn" 
                    onClick={handleClickAdd}
            >Add</button>
        </div>
    )
}

export default InputItem