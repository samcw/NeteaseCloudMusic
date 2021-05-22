import styles from './style.module.css';
import cn from 'classnames';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function Aside() {
  const [profile, setProfile] = useState<unknown>(null);
  const router = useRouter();
  const menu = [
    {
      index: 1,
      title: null,
      sub: [
        {
          index: 'discovery',
          title: '发现音乐',
          icon: 'music'
        },
        {
          index: 12,
          title: '视频',
          icon: 'video'
        }
      ]
    },
    {
      index: 2,
      title: '我的音乐',
      sub: [
        {
          index: 21,
          title: '下载管理',
          icon: 'download'
        },
        {
          index: 22,
          title: '我的音乐云盘',
          icon: 'cloud'
        },
        {
          index: 23,
          title: '我的收藏',
          icon: 'collect'
        }
      ]
    }
  ]

  return (
    <>
      <div className={styles.profile}>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <desc>person</desc>
            <path
              d="M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0010.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div>未登录</div>
        <img src="/images/next-black.png" alt="back" height="30" />
      </div>
      <div className={styles.menu}>
        {menu.map(item => (
          <div key={item.index}>
            {item.title ? <div className={styles.menuTitle}>{item.title}</div> : null}
            {item.sub.map(item => (
              <div key={item.index} className={cn(styles.menuItem, { [styles.active]: router.pathname.split('/')[1] === item.index })}>
                <img style={{marginRight: '15px'}} src={`/images/${item.icon}.png`} alt="icon" height="16px" />
                {item.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
