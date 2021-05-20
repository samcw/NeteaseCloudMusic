import cn from 'classnames'
import { useState, useMemo } from 'react'
import useInterval from '../../hooks/useInterval'

export default function SlideCard({
  banners,
}: {
  banners: Array<IBannerItem>;
}) {
  const [currentMid, setCurrentMid] = useState(0)

  useInterval(() => {
    if (banners.length === 0) return;
    setCurrentMid((currentMid + 1) % banners.length);
  }, 6000)

  useMemo(() => {
    const len = banners.length
    const left = (currentMid - 1 + len) % len
    const right = (currentMid + 1) % len
  }, [currentMid, banners])

  return <>Card</>;
}
