import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!user) {
    return (
      <button className={styles.loginBtn} onClick={login}>
        Login
      </button>
    );
  }

  const avatarPath = user.avatar?.tmdb?.avatar_path;
  const avatarUrl = avatarPath
    ? `https://image.tmdb.org/t/p/w45${avatarPath}`
    : null;
  const initials = (user.name || user.username || "?")[0].toUpperCase();

  return (
    <div className={styles.container} ref={ref}>
      <button className={styles.avatarBtn} onClick={() => setOpen((o) => !o)}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={user.username} className={styles.avatarImg} />
        ) : (
          <div className={styles.avatar}>{initials}</div>
        )}
        <span className={styles.name}>{user.name || user.username}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <span className={styles.dropdown__name_mobile}>{user.name || user.username}</span>
          <button
            className={styles.dropdown__logout}
            onClick={() => { setOpen(false); logout(); }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
