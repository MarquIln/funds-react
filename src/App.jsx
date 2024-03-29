import Header from "./components/Header"
import './global.css'
import styles from './App.module.css'
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post title='bom dia' content='ola pessoal'/>
            <Post title='bom dia' content='ola pessoal'/> 
          </main>
      </div>
    </div>
  )
}

export default App
