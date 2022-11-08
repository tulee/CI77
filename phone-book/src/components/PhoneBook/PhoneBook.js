import { useState } from "react";
import InputItem from "../InputItem/InputItem";
import PhoneItem from "../PhoneItem/PhoneItem";
import "./PhoneBook.css";

function PhoneBook () {
    const initList = [{
                        id:'01',
                        name: 'Alice',
                        phone:'(816)-403-5456',
                        isChoose:false
                    },
                    {
                        id:'02',
                        name: 'Bob',
                        phone:'(572)-566-5456',
                        isChoose:false
                    },
                    {
                        id:'03',
                        name: 'Kaylin',
                        phone:'(572)-566-5456',
                        isChoose:false
                    }];
    const [PhoneList, setPhoneList] = useState(initList);
    const [searchKw, setSearchKw] = useState("");
    
    function handleAddItem(item) {
        setPhoneList([...PhoneList,item])
    }

    function handleSearchKw(e) {
        setSearchKw(e.target.value.toLowerCase())
    }

    function handleDelDup() {
       const uniqueContact = Array.from(new Set(PhoneList.map(a => a.phone)))
        .map(phone => {
            return PhoneList.find(a => a.phone === phone)
        }) 

        setPhoneList(uniqueContact)
    }

    function handleChoose(item){
        const newList = PhoneList.map((a) =>{
                            if(a.id == item.id){
                                return {
                                    ...a,
                                    isChoose: !a.isChoose
                                }
                            }
                            return a
                        })
        setPhoneList(newList)
    }

    function handleDel() {
        const newList = PhoneList.filter((item) => item.isChoose == false)
        setPhoneList(newList)
    }
    
    return (
        <div className="phoneBookContainer">
            <InputItem handleAddItem = {handleAddItem}></InputItem>
            <div className="filterBar">
                <input 
                    placeholder="Search Keyword" 
                    type="text" 
                    className="searchBar"
                    value={searchKw}
                    onChange={handleSearchKw}    
                />
                <button className="delDupBtn" onClick={handleDelDup}>Delete Duplicate</button>
                <button className="delBtn" onClick={handleDel}>Delete</button>
            </div>
            <div className="phoneList">
                <ul>
                    {PhoneList
                    // .filter(item => item.isDelete == false)
                    .filter(item => (item.name.toLowerCase().includes(searchKw)||item.phone.toLowerCase().includes(searchKw)))
                    .map((item) => <PhoneItem 
                                        name={item.name} 
                                        phone={item.phone} 
                                        key={item.id}
                                        isChoose={item.isChoose}
                                        handleChoose={() => handleChoose(item)}    
                                    ></PhoneItem>)}
                </ul>
            </div>
        </div>
    )
}

export default PhoneBook;