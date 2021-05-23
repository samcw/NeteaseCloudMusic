import styles from './style.module.css'
import HotMovieItem from './HotMovieItem/index';

export default function HotMovie({
  movie
}: {
  movie: Array<IHotMovie>;
}) {
  return (
    <div className={styles.wrap}>
      {movie.map((item, index) => (
        <HotMovieItem key={item.id} hotMovieItem={item} />
      ))}
    </div>
  )
};
