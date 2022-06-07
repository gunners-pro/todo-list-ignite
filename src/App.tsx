import { PlusCircle } from 'phosphor-react';
import imgLogo from './assets/logo.svg';
import styles from './app.module.css';
import { NothingTodos } from './components/NothingTodos';
import { TodoList } from './components/TodoList';

function App() {
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
          />
          <button type="button">
            Criar
            <PlusCircle size={18} />
          </button>
        </div>

        <div className={styles.infoPanel}>
          <div>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
        <TodoList />
      </main>
    </div>
  )
}

export { App }
