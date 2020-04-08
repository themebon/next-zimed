import React,{ useEffect } from 'react';

const Preloader = () => {

    useEffect(() => {
        window.onload = function(){
           //hide the preloader
           document.querySelector(".preloader").style.display = "none";
        }
    }, []);

    return (
        <div className="preloader">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Preloader;
