import cn from 'classnames';
import styles from './style.module.css';
import { useState, useMemo, useCallback } from 'react';
import useInterval from '../../hooks/useInterval';
import SlideCardItem from './SlideCardItem/index';
import SlideCardDot from './SlideCardDot/index';

export default function SlideCard({
  banners,
}: {
  banners: Array<IBannerItem>;
}) {
  const [currentMid, setCurrentMid] = useState(0);

  useInterval(() => {
    if (banners.length === 0) return;
    setCurrentMid((currentMid + 1) % banners.length);
  }, 6000);

  const bannersClassName = useMemo(() => {
    const len = banners.length;
    const left = (currentMid - 1 + len) % len;
    const right = (currentMid + 1) % len;
    return {
      [currentMid]: styles.middle,
      [left]: styles.left,
      [right]: styles.right,
    };
  }, [currentMid, banners]);

  const handleMouseOver = useCallback((index) => {
    setCurrentMid(index);
  }, []);

  return (
    <div className={styles.slideCard}>
      <div className={styles.slideImg}>
        {banners.map((item, index) => {
          const { imageUrl } = item;
          const className = bannersClassName[index] || styles.hidden;
          return (
            <SlideCardItem key={imageUrl} banner={item} className={className} />
          );
        })}
      </div>
      <div className={styles.slideCardDotWrap}>
        {banners.map((item, index) => {
          return (
            <SlideCardDot
              key={item.imageUrl}
              index={index}
              currentMid={currentMid}
              handleMouseOver={() => { handleMouseOver(index) }}
            />
          );
        })}
      </div>
    </div>
  );
}
