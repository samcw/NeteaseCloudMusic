import SlideCard from '../../components/SlideCard/index';
import SongList from '../../components/SongList/index';
import { request } from '../../network/index';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Loading from '../../components/Loading/index';

export default function Discovery() {
  const [banners, setBanners] = useState<Array<IBannerItem>>(null);
  const [songList, setSongList] = useState<Array<ISongListItem>>(null);
  
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
    getBanner(0);
    getSongList(10);
  }, []);

  return (
    <div className={styles.discovery}>
      <Loading currentState={banners}>
        <SlideCard banners={banners}></SlideCard>
      </Loading>
      <Loading currentState={songList}>
        <SongList songList={songList} pageInfo={null} />
      </Loading>
    </div>
  );
}
