import SlideCard from '../../components/SlideCard/index';
import SongList from '../../components/SongList/index';
import LatestSongList from '../../components/LatestSongList/index';
import HotMovie from '../../components/HotMovie/index';
import { request } from '../../network/index';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Loading from '../../components/Loading/index';

export default function Discovery() {
  const [banners, setBanners] = useState<Array<IBannerItem>>(null);
  const [songList, setSongList] = useState<Array<ISongListItem>>(null);
  const [newSong, setNewSong] = useState<Array<ISong>>(null);
  const [movie, setMoive] = useState<Array<IHotMovie>>(null);
  async function getSongList(limit: number) {
    try {
      const res = await request({
        url: `/personalized?limit=${limit}`,
        method: 'get',
      });
      setSongList(res.result);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    async function getBanner(type: number) {
      try {
        const res = await request({
          url: `/banner?type=${type}`,
          method: 'get',
        });
        setBanners(res.banners);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    async function getNewSong() {
      try {
        const res = await request({
          url: `/top/song?type=0`,
          method: 'get',
        });
        setNewSong(res.data.slice(0, 10));
      } catch (error) {
        throw new Error(error.message);
      }
    }
    async function getMovie() {
      try {
        const res = await request({
          url: `/personalized/mv`,
          method: 'get',
        });
        setMoive(res.result);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    getBanner(0);
    getSongList(10);
    getNewSong();
    getMovie();
  }, []);

  return (
    <div className={styles.discovery}>
      <Loading currentState={banners}>
        <SlideCard banners={banners}></SlideCard>
      </Loading>
      <Loading currentState={songList}>
        <div className={styles.songListWrap}>
          <div className={styles.songListTitle}>
            <span>推荐歌单</span>
            <img src="/images/next-black.png" alt="next" width="24" />
          </div>
          <SongList songList={songList} pageInfo={null} />
        </div>
      </Loading>
      <Loading currentState={newSong}>
        <div className={styles.songListWrap}>
          <div className={styles.songListTitle}>
            <span>最新音乐</span>
            <img src="/images/next-black.png" alt="next" width="24" />
          </div>
          <LatestSongList latestSongList={newSong} />
        </div>
      </Loading>
      <Loading currentState={movie}>
      <div className={styles.songListWrap}>
        <div className={styles.songListTitle}>
          <span>推荐MV</span>
          <img src="/images/next-black.png" alt="next" width="24" />
        </div>
        <HotMovie movie={movie} />
      </div>
      </Loading>
      <div style={{ height: '20px' }}></div>
    </div>
  );
}
