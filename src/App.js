import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';



function App() {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme") ) || 'light')
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks"))||[])
  const [editTask , setEditTask]  = useState({})
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])

  return (
    <section className="p-3  main-section">
     <NavigationBar 
      theme={theme}
      setTheme = {setTheme}
     />
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
