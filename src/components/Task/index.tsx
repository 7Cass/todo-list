import styles from './Task.module.css'
import { ClipboardText, Circle, CheckCircle, Trash } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react';

interface Task {
    id: string;
    title: string;
    isFinished: boolean
}

interface TaskProps {
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
}

export function Task({ tasks, setTasks }: TaskProps) {

    function getFinishedTasks(): string {
        const finished = tasks.filter((task) => task.isFinished)

        return `${finished.length} de ${tasks.length}`
    }

    function deleteTask(taskId: string): void {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
        
        setTasks(tasksWithoutDeletedOne)
    }

    function toggleFinishedTask(taskId: string): void {
        const selectedTaskIndex = tasks.findIndex(task => task.id === taskId)

        const updatedTasks = [...tasks]
        updatedTasks[selectedTaskIndex].isFinished = !updatedTasks[selectedTaskIndex].isFinished

        
        setTasks(updatedTasks)
        console.log(tasks);
    }

    console.log(tasks);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.createdTasks}>
                    <strong>Tarefas Criadas</strong>
                    <p>{tasks.length}</p>
                </div>
                <div className={styles.finishedTasks}>
                    <strong>Concluídas</strong>
                    <p>{getFinishedTasks()}</p>
                </div>
            </header>

            {tasks && tasks.length === 0
                ? <main className={styles.emptyTasks}>
                    <div>
                        <ClipboardText size={56}/>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </main> 
                : <main className={styles.tasksList}>
                    {tasks.map(({id, title, isFinished}) => {
                        return (
                            <div className={styles.task} key={id}>
                                {isFinished ? <CheckCircle onClick={() => toggleFinishedTask(id)} className={styles.finished} size={24} weight="fill"/> : <Circle onClick={() => toggleFinishedTask(id)} className={styles.notFinished} size={24}/>}
                                <p style={{
                                    textDecoration: isFinished ? 'line-through' : 'none',
                                    color: isFinished ? 'var(--gray-300)' : 'inherit'
                                }}>{title}</p>
                                <Trash className={styles.trash} size={20} onClick={() => deleteTask(id)}/>
                            </div>
                        )
                    })}
                </main>
            }
        </div>
    )
}