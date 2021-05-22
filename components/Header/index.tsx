import styles from './style.module.css';

export default function Header() {
  const nav = [
    {
      id: 1,
      title: '个性推荐',
    },
    {
      id: 2,
      title: '每日歌曲推荐',
    },
    {
      id: 3,
      title: '歌单',
    },
    {
      id: 4,
      title: '排行榜',
    },
    {
      id: 5,
      title: '歌手',
    },
    {
      id: 6,
      title: '最新音乐',
    },
  ];

  return (
    <>
      <div className={styles.logo}></div>
      <div className={styles.backNext}>
        <img src="/images/back.png" alt="back" height="30" />
        <img src="/images/next.png" alt="back" height="30" />
      </div>
      <div className={styles.nav}>
        {nav.map((item) => (
          <span key={item.id}>{item.title}</span>
        ))}
      </div>
      <div className={styles.searchWrap}>
        <img src="/images/search.png" alt="search" height="20" />
        <input type="text" />
      </div>
      <a href="https://github.com/samcw/NeteaseCloudMusic" target="block" className={styles.githubLogo}>
        <img
          src="https://github.githubassets.com/favicons/favicon-dark.svg"
          alt="githubLogo"
          height="30"
        />
      </a>
    </>
  );
}
