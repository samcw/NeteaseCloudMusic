import styles from './style.module.css'
import LatestSongListItem from './LatestSongListItem/index'

export default function LatestSongList({
  latestSongList
}: {
  latestSongList: Array<ISong>;
}) {
  return (
    <div className={styles.wrap}>
      {latestSongList.map((item, index) => (
        <LatestSongListItem index={index} key={item.id} latestSongListItemInfo={item} />
      ))}
    </div>
  )
};
