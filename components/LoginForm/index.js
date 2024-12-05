import styles from "@/styles/login.module.css";
export default function LoginForm({ loginUserFunction }) {
  return (
    <div className={styles.loginFormContainer}>
      <h2>Login Form</h2>
      <form
        className={styles.loginForm}
        onSubmit={(e) => {
          e.preventDefault();
          loginUserFunction(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className={styles.inputField} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className={styles.inputField} />
        <button type="submit" className={styles.submitButton}>
          Login User
        </button>
      </form>
    </div>
  );
}
