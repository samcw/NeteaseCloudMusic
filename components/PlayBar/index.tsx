import styles from './style.module.css';

export default function PlayBar() {
  return (
    <>
      <div className={styles.item}></div>
      <div className={styles.play}>
        <div className={styles.previousMusic}>
          <img src="/images/preMusic.png" alt="preMusic" width="26" />
        </div>
        <div className={styles.playControl}>
          <img src="/images/barPlay.png" alt="play" width="26" />
        </div>
        <div className={styles.nextMusic}>
          <img src="/images/nextMusic.png" alt="preMusic" width="26" />
        </div>
      </div>
      <div className={styles.item}></div>
    </>
  );
}
