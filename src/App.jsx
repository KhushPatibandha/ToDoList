import { useState } from "react";

export default function ToDoList() {
  const [tasksArr, setTasksArr] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleAccept = () => {
    setTasksArr([...tasksArr, newTask])
    setNewTask("")
  }

  const handleDelete = (index) => {
    const updateTask = [...tasksArr]
    updateTask.splice(index, 1)
    setTasksArr(updateTask)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" placeholder="Enter Task to add" onChange={e => setNewTask(e.target.value)}/>
      <button onClick={handleAccept}>
        Add Task
      </button>
      <ul>
        {tasksArr.map((tasksArr, index) => (
          <li key={index}>
            {tasksArr}
            <button onClick={() => handleDelete(index)}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}