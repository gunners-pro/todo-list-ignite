import { PlusCircle } from 'phosphor-react';
import { v4 as uuidV4 } from 'uuid'
import imgLogo from './assets/logo.svg';
import styles from './app.module.css';
import { NothingTodos } from './components/NothingTodos';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

export interface PropsTodos {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<PropsTodos[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [todoTotalDone, setTodoTotalDone] = useState(() => {
    return todos.reduce((acc, todo) => {
      if(todo.done) {
        acc++
      }
      return acc;
    }, 0)
  })

  function handleAddNewTodo() {
    if(newTodo.length <= 0) {
      alert('Preencha o campo nova tarefa')
    } else {
      setTodos([...todos, { id: uuidV4(), content: newTodo, done: false }])
    }
    setNewTodo('')
  }

  return (
    <div className={styles.page}>
      <header>
        <img src={imgLogo} alt="Logotipo" />
      </header>
      <main>
        <div className={styles.inputData}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <button type="button" onClick={handleAddNewTodo}>
            Criar
            <PlusCircle size={18} />
          </button>
        </div>

        <div className={styles.infoPanel}>
          <div>
            <strong>Tarefas criadas</strong>
            <span>{todos.length}</span>
          </div>
          <div>
            <strong>Concluídas</strong>
            <span>{todoTotalDone} de {todos.length}</span>
          </div>
        </div>
        {
          todos.length < 1 ? (
            <NothingTodos />
          ) : (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setTodoTotalDone={setTodoTotalDone}
            todoTotalDone={todoTotalDone}
          />
            )
        }
      </main>
    </div>
  )
}

export { App }
