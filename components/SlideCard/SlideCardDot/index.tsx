import styles from './style.module.css';
import cn from 'classnames';

export default function SlideCardDot({
  index,
  currentMid,
  handleMouseOver
}: {
  index: number;
  currentMid: number;
  handleMouseOver: () => void
}) {
  return (
    <div
      className={cn(styles.slideCardDot, { [styles.active]: index === currentMid })}
      onMouseOver={() => handleMouseOver()}
    ></div>
  );
}
