import SongListItem from './SongListItem/index'

export default function SongList({
  pageInfo,
  songList
}: {
  pageInfo: unknown;
  songList: Array<ISongListItem>;
}) {
  return (
    <div>
      {songList.map(item => (
        <SongListItem key={item.id} songListItemInfo={item} />
      ))}
    </div>
  )
};
