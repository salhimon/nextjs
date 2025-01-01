import styles from "../Styles/projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Mes Projets</h1>
      <div className={styles.projectCard}>
        <h2>Portfolio Personnel</h2>
        <p>Un site web portfolio construit avec Next.js.</p>
      </div>
    </div>
  );
}
