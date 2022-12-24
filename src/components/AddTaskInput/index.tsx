import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import styles from './AddTaskInput.module.css'

interface AddTaskInputProps {
    handleCreateNewTask: (event: FormEvent) => void
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleNewTaskInvalid: (event: ChangeEvent<HTMLInputElement>) => void
    isNewTaskEmpty: boolean
}

export function AddTaskInput({ handleCreateNewTask, handleNewTaskChange, handleNewTaskInvalid, isNewTaskEmpty }: AddTaskInputProps) {
    return (
        <form onSubmit={handleCreateNewTask} className={styles.form}>
            <input name="task" onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} placeholder='Adicione uma nova tarefa' required/>
            <button type="submit" disabled={isNewTaskEmpty}>Criar <PlusCircle size={18}/></button>
        </form>
    )
}