
export const TaskList=({tasks,setTasks,setEditTask})=>{

    function handleDelete(id){
       const updateTaskList = tasks.filter(item => item.id !== id);
       setTasks(updateTaskList)

    }
    function handleEdit(id){

        const findTask = tasks.find(item => item.id === id)
        setEditTask(findTask)
    }
    
    return(
        <div className="task-list-main">
            <ul>
                {
                    tasks.map((item)=>(
                       
                   
                        <li key={item.id}>
                         <p className="task-card">
                            <span className="task-card-name">{item.name}</span>

                            <span className="task-card-time">{item.date}</span>
                         </p>
                         <i 
                            className="bi bi-pencil-square" 
                            style={{ 
                                color:'#1363df',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }} 
                            onClick={()=>handleEdit(item.id)}
                        ></i>

                        <i 
                            className="bi bi-trash" 
                            style={{ 
                                color:'#d82148' , 
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
                            onClick={()=>handleDelete(item.id)}
                        ></i>


                       </li>
                      
                    ))
                }
            </ul>
        </div>
    )
}