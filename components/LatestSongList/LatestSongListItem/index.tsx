import styles from './style.module.css';

export default function LatestSongListItem({
  latestSongListItemInfo,
  index,
}: {
  latestSongListItemInfo: ISong;
  index: number;
}) {
  return (
    <div className={styles.songListItem}>
      <div>
        <img src={latestSongListItemInfo.album.blurPicUrl} alt="pic" />
        <img src="/images/play-icon.png" alt="playicon" />
      </div>
      <span>{index}</span>
      <div className={styles.songListItemName}>
        <span>{latestSongListItemInfo.name}</span>
        <a>
          {latestSongListItemInfo.artists.map((item) => item.name).join('/')}
        </a>
      </div>
    </div>
  );
}
