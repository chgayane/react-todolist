import React from "react"
import styles from "./TaskListItem.module.css"


function TaskListItem({ task }){
    const { title } = task;

    return (
        <div className={styles.task}>
            <div>
                <input 
                readOnly={true}
                className='taskContent'
                type='text'
                value={title}
                />
            </div>
            <div className="taskBtn">
                <button className="editBtn">Edit</button>
                <button className="imprtantBtn">Important</button>
                <button className="doneBtn">Done</button>
                <button className="deleteBtn">Delete</button>
            </div>
        </div>
    )
}

export default TaskListItem;