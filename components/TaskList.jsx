import React from 'react'

export const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed }
    updateTask(updatedTask, index)
  }
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
          </div>
          <div>
            <button onClick={() => toggleComplete(index)}>{task.completed ? "undo" : "completed"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>

  )
}
