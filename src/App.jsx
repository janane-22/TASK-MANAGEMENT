import { useEffect, useState } from 'react'
import './App.css'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import  ProgressBar  from './components/ProgressBar'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, task])
}

const updateTask  = (updatedTask, index) =>{
const newTasks = [...tasks];
newTasks[index]=updatedTask;
setTasks(newTasks);
}
const deleteTask =(index)=>{
  setTasks(tasks.filter((_, i)=> i !== index))

}
  return (
    <>
      <div>
        <header>
          <h1>TaskBuddy</h1>
          <p>Your Friendly Task Manager</p>
        </header>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
        <ProgressBar tasks={tasks} />
      </div>
    </>
  )
}

export default App
