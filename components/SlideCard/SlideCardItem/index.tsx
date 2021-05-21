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
    <div className={cn(styles.bannerItem, className)}>
      <img src={banner.imageUrl} alt="imageUrl" loading="lazy" />
    </div>
  );
}
