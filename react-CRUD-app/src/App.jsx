import { useState } from "react"
import CustomForm from "./components/CustomForm"
import TaskList from "./components/TaskList"


function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }
  const deleteTask = (id) => {
    
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }
  const updateChecked = (id) => {
    setTasks(prevState => prevState.map(task => (
      task.id === id ? {...task, checked: !task.checked} : task
    )))
    
  }
  

  return (
    <div className="container">
      <header>
        <h1>My Task list</h1>
      </header>
     <CustomForm addTask={addTask}/>
     {tasks && 
     <TaskList 
     tasks={tasks} 
     deleteTask={deleteTask}
     updateChecked={updateChecked}
     />}
    </div>
  )
}

export default App
