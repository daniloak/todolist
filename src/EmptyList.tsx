import { ClipboardText } from 'phosphor-react';
import styles from './EmptyList.module.css';

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={64} />
            <strong>You don't have any task listed yet</strong>
            <p>Create tasks above and organize your todo itens</p>
        </div>
    );
}