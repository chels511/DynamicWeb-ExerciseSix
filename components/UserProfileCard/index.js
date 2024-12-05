import styles from "@/styles/userprofile.module.css";
export default function UserProfileCard({ userInformation }) {
  return (
    <div className={styles.profileCard}>
      <h2 className={styles.profileHeading}>User Profile</h2>
      <p className={styles.profileDetail}>Email: {userInformation?.email}</p>
    </div>
  );
}
