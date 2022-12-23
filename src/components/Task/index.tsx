import styles from './Task.module.css'
import { ClipboardText, Circle, CheckCircle, Trash } from 'phosphor-react'

interface Task {
    id: string;
    title: string;
    isFinished: boolean
}

interface TaskProps {
    tasks: Task[]
}

export function Task({ tasks }: TaskProps) {
    console.log(tasks);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.createdTasks}>
                    <strong>Tarefas Criadas</strong>
                    <p>5</p>
                </div>
                <div className={styles.finishedTasks}>
                    <strong>Concluídas</strong>
                    <p>2 de 5</p>
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
                                {isFinished ? <CheckCircle className={styles.finished} size={24} weight="fill"/> : <Circle className={styles.notFinished} size={24}/>}
                                <p style={{
                                    textDecoration: isFinished ? 'line-through' : 'none',
                                    color: isFinished ? 'var(--gray-300)' : 'inherit'
                                }}>{title}</p>
                                <Trash className={styles.trash} size={20} />
                            </div>
                        )
                    })}
                </main>
            }
        </div>
    )
}