import { useState, useEffect } from 'react'

const saved = localStorage.getItem('tasks')
const initialTasks = saved ? JSON.parse(saved) : ['Купить еду', 'Поспать']

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [input, setInput] = useState('')

  function addTask() {
    if (input === '') return
    setTasks([...tasks, input])
    setInput('')
  }

  function deleteTask(index) {
    const newTasks = tasks.filter(function(task, i) {
        return i !== index
    })
    setTasks(newTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <h1>Мои задачи</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map(function(task, index) {
          return (
                <li key={index}>
                    {task}
                    <button onClick={() => deleteTask(index)}>✕</button>
                </li>
          )     
        })}
      </ul>
    </div>
  )
}

export default App