import styles from './style.module.css';
import cn from 'classnames';

export default function SlideCardDot({
  index,
  currentMid,
}: {
  index: number;
  currentMid: number;
}) {
  return (
    <div
      className={cn(styles.slideCardDot, { [styles.active]: index === currentMid })}
    ></div>
  );
}
