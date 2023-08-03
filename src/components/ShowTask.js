import { TaskList } from "./TaskList"
export const ShowTask=({tasks,setTasks, setEditTask })=>{
    return(
        <div className="task-main-box">
            <div className="task-box">
                {/* head */}
                <div className="task-head">
                    <span>
                        <span className="text">Todo</span>
                        <span className="count">{tasks.length}</span>
                    </span>
                    <span>
                        <button className="clr-btn btn btn-primary" onClick={()=>{setTasks([])}}>Clear All</button>
                    </span>
                </div>
                {/* task list */}
                <TaskList 
                    tasks={tasks} 
                    setTasks={setTasks}
                    setEditTask = {setEditTask}

                />
                
            </div>
        </div>
    )
}