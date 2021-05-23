import styles from './style.module.css'
import { calc } from '../../../utils/calc';

export default function SongListItem({
  songListItemInfo,
}: {
  songListItemInfo: ISongListItem;
}) {
  return <div className={styles.songListItem}>
    <img src={songListItemInfo.picUrl} alt="pic"/>
    <div className={styles.songListItemCount}>
      <img src="/images/play.png" alt="play" height="12" />
      {calc(songListItemInfo.playCount)}
    </div>
    <div className={styles.songListItemName}>
      {songListItemInfo.name}
    </div>
  </div>;
}
