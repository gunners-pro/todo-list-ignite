import { Trash } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react';
import { PropsTodos } from '../../App';
import styles from './todolist.module.css';

interface PropsTodoList {
  todos: Array<PropsTodos>;
  setTodos: Dispatch<SetStateAction<PropsTodos[]>>;
  todoTotalDone: number;
  setTodoTotalDone: Dispatch<SetStateAction<number>>;
}

function TodoList({ todos, setTodos, todoTotalDone, setTodoTotalDone }: PropsTodoList){

  function handleRemoveTodo(id: string) {
    const updatedTodo = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(updatedTodo)
    const updatedTodoDone = updatedTodo.reduce((acc, todo) => {
      if(todo.done) {
        acc++
      }
      return acc
    }, 0)

    setTodoTotalDone(updatedTodoDone)

  }

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
                      if(changeTodo.done) {
                        setTodoTotalDone(todoTotalDone + 1)
                      } else {
                        setTodoTotalDone(todoTotalDone - 1)
                      }
                    }
                    return changeTodo
                  })
                  setTodos(changeTodos)
                }} />
              <label htmlFor={todo.id}></label>
            </div>
            <p style={todos[index].done ? {textDecoration: 'line-through'} : {}}>{todo.content}</p>
            <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
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
