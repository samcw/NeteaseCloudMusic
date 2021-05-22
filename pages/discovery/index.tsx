import SlideCard from '../../components/SlideCard/index';
import { request } from '../../network/index';
import { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Discovery() {
  const [banners, setBanners] = useState<Array<IBannerItem>>([]);

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
  }, []);

  return (
    <div className={styles.discovery}>
      <SlideCard banners={banners}></SlideCard>
    </div>
  );
}
