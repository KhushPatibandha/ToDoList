import { useState } from "react";

export default function ToDoList() {

  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAccept = () => {
    setTask (
      [
        ...task,
        newTask
      ]
    )
    setNewTask('')
  }

  const handleDelete = (index) => {
    const updateTask = [...task]
    updateTask.splice(index, 1)
    setTask(updateTask)
  }

  return (
    <div>

      <h1>To Do List</h1>
      <input type="text" onChange={e => setNewTask(e.target.value)}/>
      <button onClick={handleAccept}>
        Add Task
      </button>

      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>
              Delete task
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}