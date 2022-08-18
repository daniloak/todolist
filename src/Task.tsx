import { TrashSimple } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
    return (
        <article className={styles.task}>
            <label>
                <span className={styles.checkMark}><input name="checkbox-1" type="checkbox"></input></span>
                asdsadsadasdsadasadsadsadasdasdsadsada asd dasdsa dad asdasdasdas dasdasdas dasdasdasd as dasd as dsa ddssa
            </label>

            <TrashSimple />
        </article>
    )
}