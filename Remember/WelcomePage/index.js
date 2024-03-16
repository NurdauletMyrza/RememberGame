import { Link } from "react-router-dom";
import styles from "../Styles.module.css";

function WelcomePage() {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.welcome__header}>Remember</h1>
      <p className={styles.welcome__text}>Есте сақта ойыны</p>
      <Link to="/main"><button  className={styles.welcome__button}>Кеттік!</button></Link>
    </div>
  );
}

export default WelcomePage;