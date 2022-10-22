//trac nghiem

//1. 2
//2. 1
//3. 1
//4. 3
//5. 2
//6. 1
//7. 4
//8. 2
//9. 1
//10. 2
//11. 1
//12. 1
//13. 4

//Thuc hanh
//1. viet dao nguoc string

// const reverse = (str) => [...str].reverse().join("")
// console.log(reverse("abcdef"));

//========================================
//2. function delete gia tri trung
// const removeDup = (arr) => { return arr.filter((e,index) => {
//     return arr.indexOf(e) === index    
// })}

// console.log(removeDup([1, 2, 3, 5, 4, 2, 6, 4]));

//========================================
// //3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng

// function getMostOccuring (arr) {
//     const hashMap = arr.reduce((ob, val)=> {
//         ob[val] = (ob[val] || 0) + 1
//         return ob
//     },{})

//     const maxValue = Math.max.apply(null, Object.values(hashMap))

//     const found = Object.keys(hashMap).filter(x => {
//         return hashMap[x] == maxValue
//      })

//     let result = found.map(e => {
//         return {
//             value: e,
//             count: maxValue
//         }
//     })
//     return result
// }

// let arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]

// console.log(getMostOccuring(arr));

//Viết một ứng dụng web danh bạ có giao diện và yêu cầu

let contactArr = {}

function addContact () {
    let contactList = ''
    let inputName = document.getElementById("inputName").value 
    let inputPhone = document.getElementById("inputPhone").value
    if(inputName=="" || inputPhone==""){
        alert("You must fill Name and Phone")
    }else{
        contactArr[inputName]=inputPhone
        Object.keys(contactArr).sort().map(e => {
            contactList += 
                `<li class="listContainer show">
                    <div class="contactName show">${e}</div>
                    <div class="contactPhone show">${contactArr[e]}</div>
                </li>`
        })
        document.getElementById("contactList").innerHTML=contactList
    }
    document.getElementById("inputName").value=""
    document.getElementById("inputPhone").value=""
}



// const listItems = document.getElementsByClassName("contactName");
// function calculateHeightOfListContainer(){
//     const firstListItem = listItems[0];
//     let heightOfListItem = firstListItem.clientHeight;
//     const styleTag = document.createElement('style');
//     document.body.prepend(styleTag);
//     styleTag.innerHTML = `.listContainer.show {
//         height: ${heightOfListItem}px;
//     }`;
//     setTimeout(function(){
//         styleTag.innerHTML += `.listContainer {
//             transition: all 0.6s ease-out;
//         }`;
//     }, 0);
// };

// calculateHeightOfListContainer();


// function addContact () {
//     let contactList = ''
//     let inputName = document.getElementById("inputName").value 
//     let inputPhone = document.getElementById("inputPhone").value
//     if(inputName=="" || inputPhone==""){
//         alert("You must fill Name and Phone")
//     }else{
//         contactArr[inputName]=inputPhone
//         // let addedIndex = Object.keys(contactArr).sort().indexOf(inputName)
//         let sortArr = () => {
//             let newContactArr ={}
//             Object.keys(contactArr).sort().map(e => newContactArr[e]=contactArr[e])
//             contactArr=newContactArr
//             return contactArr
//         }
//         sortArr()

//         let addedIndex = contactArr.indexOf(inputName)

//         // Object.keys(contactArr).sort().map(e => {
//         //     contactList += 
//         //         `<li>
//         //             <a class="contactName">${e}</a>
//         //             <a class="contactPhone">${contactArr[e]}</a>
//         //         </li>`
//         // })
//         // document.getElementById("contactList").innerHTML=contactList
//     }
//     document.getElementById("inputName").value=""
//     document.getElementById("inputPhone").value=""
// }


function search() {
    let searchTerm = document.getElementById("inputSearch").value
    let searchResult = Object.keys(contactArr).filter(e => e.includes(searchTerm) || contactArr[e].includes(searchTerm))
    let contactList = ''

    if(searchTerm==""){
        Object.keys(contactArr).sort().map(e => {
            contactList += 
            `<li class="listContainer show">
                <div class="contactName show">${e}</div>
                <div class="contactPhone show">${contactArr[e]}</div>
            </li>`
        })
        document.getElementById("contactList").innerHTML=contactList
    }else{
        searchResult.sort().map(e => {
            contactList += 
            `<li class="listContainer show">
                <div class="contactName show">${e}</div>
                <div class="contactPhone show">${contactArr[e]}</div>
            </li>`
        })
        document.getElementById("contactList").innerHTML=contactList
    }
}

const removeDup = (arr) => { return arr.filter((e,index) => {
    return arr.indexOf(e) === index    
})}

function deleteDup() {
    let contactList = ''

    let result = removeDup(Object.values(contactArr))
        .map(e => Object.keys(contactArr).find(a => contactArr[a]==e))
    let createNewArr = () => {
        let newContactArr ={}
        result.map(e => newContactArr[e]=contactArr[e])
        contactArr=newContactArr
        return contactArr
    }
    
    createNewArr()

    Object.keys(contactArr).sort().map(e => {
        contactList += 
        `<li class="listContainer show">
            <div class="contactName show">${e}</div>
            <div class="contactPhone show">${contactArr[e]}</div>
        </li>`
    })
    document.getElementById("contactList").innerHTML=contactList
}