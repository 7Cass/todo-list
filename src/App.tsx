import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskInput } from './components/AddTaskInput'
import { Task } from './components/Task'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'

interface Task {
  id: string;
  title: string;
  isFinished: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    const newCreatedTask: Task = {
      id: uuid(),
      title: newTask,
      isFinished: false
    }

    setTasks([...tasks, newCreatedTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTaskInput 
          handleCreateNewTask={handleCreateNewTask} 
          handleNewTaskChange={handleNewTaskChange} 
          handleNewTaskInvalid={handleNewTaskInvalid}
          isNewTaskEmpty={isNewTaskEmpty}/>
        <Task tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
