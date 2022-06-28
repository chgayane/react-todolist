import React from "react"
import  "./Header.module.css"

function Header (){
    return (
        <div className="taskContainer">
            <h1>My Tasks</h1>
            <div className="t-line"></div>

            <div className="header">
                <input 
                    type="text"
                    placeholder='What do you have planed?'
                    className="taskInput"
                />

                <button className="taskInputBtn">ADD TASK</button>
            </div>
        </div>
    )
}

export default Header;