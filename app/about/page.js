// about.js
import styles from "./about.module.css";
import { metadata } from "../layout";
export default function about() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>
      <h3 className={styles.subtitle}>Je suis</h3>
      <h1 className={styles.name}>Salhi Moneem</h1>
      <p className={styles.description}>Un développeur passionné par la création de sites modernes.</p>
      <img
        src="/p4.jpg"
        alt="Photo de profil"
        className={styles.profilePic}
      />
       <div style={{ textAlign: "center", padding: "2rem" }} className="metadata-display">
            <h1>{metadata.title}</h1>
            <p>{metadata.description}</p>
          </div>
    </div>
  );
}
