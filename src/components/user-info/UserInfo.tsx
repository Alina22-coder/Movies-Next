import styles from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>A</div>
            <span className={styles.name}>Admin</span>
        </div>
    );
};

export {UserInfo};
