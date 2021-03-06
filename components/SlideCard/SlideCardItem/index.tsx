import styles from './style.module.css';
import cn from 'classnames';

export default function SlideCardItem({
  banner,
  className,
}: {
  banner: IBannerItem,
  className: string
}) {
  return (
    <div className={cn(className, styles.bannerItem)}>
      <img src={banner.imageUrl} alt="imageUrl" loading="lazy" />
      <div className={styles.bannerItemTitle}>
        { banner.typeTitle }
      </div>
    </div>
  );
}
