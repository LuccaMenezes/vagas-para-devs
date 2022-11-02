import styles from './Footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Está recrutando?</h3>
      <p>Encontre a pessoa perfeita para a sua vaga!</p>
      <Link to="/posts/create" className="btn">
              Publicar Vaga
      </Link>
      <div className={styles.footer_copy}>
        <p>Dicas Para Devs &copy; 2022</p>
      </div>
    </footer>
  )
}

export default Footer