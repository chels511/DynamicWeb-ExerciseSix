import styles from "@/styles/create.module.css";
export default function CreateUserForm({ createUserFunction }) {
  return (
    <div className={styles.createFormContainer}>
      <h2>Create User Form</h2>
      <form
        className={styles.createForm}
        onSubmit={(e) => {
          e.preventDefault();
          createUserFunction(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className={styles.inputField} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className={styles.inputField} />
        <button type="submit" className={styles.submitButton}>
          Create User
        </button>
      </form>
    </div>
  );
}
