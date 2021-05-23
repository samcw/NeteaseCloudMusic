import SongListItem from './SongListItem/index'
import styles from './style.module.css'

export default function SongList({
  pageInfo,
  songList
}: {
  pageInfo: unknown;
  songList: Array<ISongListItem>;
}) {
  return (
    <div className={styles.wrap}>
      {songList.map(item => (
        <SongListItem key={item.id} songListItemInfo={item} />
      ))}
    </div>
  )
};
