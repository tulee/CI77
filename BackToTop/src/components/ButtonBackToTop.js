import './ButtonBackToTop.css';
import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

export default function ButtonBackToTop() {
    console.log("render lai button");
    const [visible, setVisible] = useState(false)
    let previousScrollPosition

    //function back to top
    function backToTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    //check scrolling down
    function isScrollingDown(){
        let scrollPosition = window.pageYOffset
        if(scrollPosition > previousScrollPosition || scrollPosition ==0){
            setVisible(false)
        }else{
            setVisible(true)
        }
        previousScrollPosition = scrollPosition
    }

    useEffect(() =>{
        previousScrollPosition = 0
        window.addEventListener('scroll', isScrollingDown);

        return () => {
            window.removeEventListener('scroll', isScrollingDown);
        }
    },[])

    

    return(
        <button style={{display: visible ? 'inline' : 'none'}}>
            <FaArrowCircleUp 
                onClick={backToTop} 
            />  
        </button>
    )
}