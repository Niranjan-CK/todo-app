import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';



function App() {
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks"))||[])
  const [editTask , setEditTask]  = useState({})
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <section className="p-3">
     <NavigationBar />
     <AddTask 
      tasks={tasks} 
      setTasks={setTasks}
      editTask = {editTask}
      setEditTask = {setEditTask}
    

      />
     <ShowTask 
      tasks={tasks} 
      setTasks={setTasks} 
      setEditTask = {setEditTask}
      />
    </section>
  );
}

export default App;
