import { Trash } from 'phosphor-react'
import styles from './todolist.module.css';

function TodoList(){
  return(
    <section>
      <div className={styles.todoItem}>
        <div className={styles.customCheck}>
          <input type="checkbox" id="item" />
          <label htmlFor="item"></label>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat, eligendi! Ab molestias itaque quas. Necessitatibus
        rerum quae sit fugiat ut nisi error possimus.
        </p>
        <button type="button">
          <Trash size={24} />
        </button>
      </div>
    </section>
  )
}

export { TodoList }
