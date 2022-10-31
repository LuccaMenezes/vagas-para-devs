import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Vagas para <span>DEVS</span></h2>
      <p>
         Um site onde você recrutador pode publicar sua vaga.
      </p>
      <Link to="/posts/create" className="btn">
         Publique sua vaga
      </Link>
    </div>
  )
}

export default About