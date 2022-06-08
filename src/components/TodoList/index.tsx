import { Trash } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react';
import { PropsTodos } from '../../App';
import styles from './todolist.module.css';

interface PropsTodoList {
  todos: Array<PropsTodos>;
  setTodos: Dispatch<SetStateAction<PropsTodos[]>>;
}

function TodoList({ todos, setTodos }: PropsTodoList){

  return(
    <section>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} className={styles.todoItem}>
            <div className={styles.customCheck}>
              <input
                type="checkbox"
                id={todo.id}
                defaultChecked={todo.done}
                onChange={(event) => {

                  const changeTodos = todos.map(changeTodo => {
                    if(changeTodo.id === todo.id) {
                      changeTodo.done = event.target.checked
                    }
                    return changeTodo
                  })
                  setTodos(changeTodos)
                }} />
              <label htmlFor={todo.id}></label>
            </div>
            <p style={todos[index].done ? {textDecoration: 'line-through'} : {}}>{todo.content}</p>
            <button type="button">
              <Trash size={24} />
            </button>
          </div>
          )
        })
      }
    </section>
  )
}

export { TodoList }
