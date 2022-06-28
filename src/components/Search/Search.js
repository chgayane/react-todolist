import "./Search.module.css"
import React from "react"
function Search (){
    return(
        <div>
             <h2>Search</h2>
             <div className=" t-line l-small"></div>
             <div className="search">
                <div className="searchInput">
                    <input 
                    type="text"
                    placeholder="Type to search"
                    />
                </div>
                <div className="buttons">
                    <button className="searchBtn">All</button>
                    <button className="searchBtn">Important</button>
                    <button className="searchBtn">Done</button>
                </div>
             </div>
        </div>
    )
}

export default Search;