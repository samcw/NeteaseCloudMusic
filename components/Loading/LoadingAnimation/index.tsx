import styles from './style.module.css';

export default function Loading() {
  return (
    <div className={styles.wrap}>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></circle>
      </svg>
    </div>
  );
}
