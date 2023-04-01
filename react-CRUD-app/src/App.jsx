import { useState } from "react"
import CustomForm from "./components/CustomForm"
import TaskList from "./components/TaskList"
import EditForm from "./components/EditForm"


function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditetTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [previousFocusEl, setPreviousFocusEl] = useState(null)

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
  const handleUpdateTask = (task) => {
    console.log(task)
    setTasks(prevState => prevState.map(t => (
      t.id === task.id ? {...t, name: task.name} : t
    )))

    closeEditMode()
    
  }
  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus();
  }
  const enterEditMode = (task) => {
    setEditetTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

 

  return (
    <div className="container">
      <header>
        <h1>My Task list</h1>
      </header>
      {
        isEditing && 
        (<EditForm
        editedTask={editedTask}
        handleUpdateTask={handleUpdateTask}
        closeEditMode={closeEditMode}
        />)
      }
      
     <CustomForm addTask={addTask}/>
     {tasks && 
     <TaskList 
     tasks={tasks} 
     deleteTask={deleteTask}
     updateChecked={updateChecked}
     enterEditMode={enterEditMode}
     />}
    </div>
  )
}

export default App
