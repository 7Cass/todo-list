import { PlusCircle } from 'phosphor-react'
import styles from './AddTaskInput.module.css'

export function AddTaskInput() {
    return (
        <form className={styles.form}>
            <input name="task" placeholder='Adicione uma nova tarefa'/>
            <button type="submit">Criar <PlusCircle size={18}/></button>
        </form>
    )
}