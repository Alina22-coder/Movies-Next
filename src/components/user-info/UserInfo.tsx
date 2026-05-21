import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>A</div>
      <span className={styles.name}>Alina</span>
    </div>
  );
};
