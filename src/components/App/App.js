import React from "react"
import Header from "../Header"
import Search from "../Search"
import TaskList from "../TaskList"
import styles from "./App.module.css"

function App(){
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <Search />
                <TaskList />
            </div>
        </div>
    )
}
export default App;