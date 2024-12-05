import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>Users and Auth</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <a onClick={logoutUserFunction}>Log Out</a>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link href="/login">Login</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/createUser">Create User</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
