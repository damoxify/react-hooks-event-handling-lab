// Code Keypad Component Here
import React from "react";

function Keypad (){
    function changePassword(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={changePassword}/>
        </div>
    )
}

export default Keypad;