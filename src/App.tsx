import { PlusCircle } from 'phosphor-react';
import imgLogo from './assets/logo.svg';
import styles from './app.module.css';

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
      </main>
    </div>
  )
}

export { App }
