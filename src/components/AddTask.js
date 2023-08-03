
export  const AddTask=({tasks,setTasks,editTask,setEditTask})=>{

    function handleTask(e){
        e.preventDefault()
        const date = new Date()
        console.log(editTask.id)
        if(editTask.id){
            const updateTask = tasks.map((item)=>(
                item.id === editTask.id ? 
                
                { 
                    id : editTask.id ,
                    name : e.target.task.value , 
                    date : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }: item
            ))

            setTasks(updateTask)
            setEditTask("")
            setEditTask({})

        }
        else
        {
            const newTask = {
                id : date.getTime(),
                name : e.target.task.value,
                date : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasks([...tasks,newTask])
            setEditTask({})
        }
    }

    return(
        <div className="search-box-body">
            <div className="search-box">
                <form className="form-group" onSubmit={handleTask}>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Add task" 
                        name="task" 
                        autoComplete="off" 
                        maxLength={25} 
                        value={editTask.name || ''}
                        onChange={e=>setEditTask({...editTask,name:e.target.value})}
                        />
                         <button className="btn btn-success add-btn" >{editTask.id ? "Update":"Add"}</button>
                </form>
            </div>
        </div>
    )
}