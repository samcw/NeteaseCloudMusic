import styles from './style.module.css';
import {calc} from '../../../utils/calc'

export default function HotMovieItem({
  hotMovieItem
}: {
  hotMovieItem: IHotMovie;
}) {
  return (
    <div className={styles.item}>
      <div className={styles.picWrap}>
        <img src={hotMovieItem.picUrl} alt="picUrl" />
        <div className={styles.songListItemCount}>
          <img src="/images/play.png" alt="play" height="12" />
          {calc(hotMovieItem.playCount)}
        </div>
      </div>
      <div className={styles.titleWrap}>
        <a>{hotMovieItem.name}</a>
        <a>{hotMovieItem.artists.map(item => item.name).join('/')}</a>
      </div>
    </div>
  );
}
