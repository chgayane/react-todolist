import TaskListItem from '../TaskListItem/TaskListItem'
import React from "react"

function TaskList(){
    const tasks = [
        {id : 1, title : 'Learn HTML and CSS'},
        {id : 2, title : 'Learn JavaScript'},
        {id : 3, title : 'Learn React'},
        {id : 4, title : 'Learn Node.js'},
    ]

    return (
        <section>
            <h2>Tasks</h2>
            <div className='t-line l-small'></div>
            {
                tasks.map(task => <TaskListItem task={task} key={task.id} />)
            }
        </section>
    )
}

export default TaskList