 import styles from './Sidebar.module.css'
 import { PencilLine } from 'phosphor-react'

 function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      <div className={styles.profile}>
        <img
          className={styles.avatar} 
          src="https://github.com/MarquIln.png"
        />
        <strong>Marcos</strong>
        <span>jobless</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
 }

export default Sidebar