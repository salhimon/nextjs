import styles from "../Styles/Contact.module.css";


export default function Contact() {
  return (
    <div className={styles.container}>
      <img
        src="/ph3.jpg"
        alt="Photo de profil"
        className={styles.profilePic}
      />
      <h1 className={styles.heading}>Contactez-moi</h1>
      <p className={styles.text}>Email: salhimoneem@gmail.com</p>
      <p className={styles.text}>Téléphone: +216 54 125 819</p>
    </div>
  );
}
