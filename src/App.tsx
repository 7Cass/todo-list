import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskInput } from './components/AddTaskInput'
import { Task } from './components/Task'

interface Task {
  id: string;
  title: string;
  isFinished: boolean
}

const tasks: Task[] = [
  {
    id: 'a',
    title: 'teste KSJFLKDSA DASJKLASJDFASDKJFDKLSAJ FJLKDSALKFJDSAJLK',
    isFinished: false
  },
  {
    id: 'b',
    title: 'teste 2',
    isFinished: false
  },
  {
    id: 'c',
    title: 'teste 3',
    isFinished: true
  }
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTaskInput />
        <Task tasks={tasks}/>
      </div>
    </>
  )
}

export default App
