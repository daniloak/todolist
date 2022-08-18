import { PlusCircle } from 'phosphor-react';
import { Task } from './Task';

import styles from './TaskList.module.css';

export function TaskList() {
    return (
        <>
            <header className={styles.header}>
                <input type="text" placeholder='Adicione uma nova tarefa'></input>
                <button>Criar <PlusCircle /></button>
            </header>
            <div className={styles.taskWrapper}>
                <div className={styles.taskSummary}>
                    <p id={styles.createdTasks}>Tarefas criadas<span>5</span></p>
                    <p id={styles.finishedTasks}>Concluidas <span>2 de 5</span></p>
                </div>
                <div className={styles.taskList}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </>
    );
}