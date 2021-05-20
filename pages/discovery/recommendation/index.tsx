import SlideCard from '../../../components/SlideCard/index'
import { request } from '../../../network/index'
import { useEffect, useState } from 'react'

export default function Recommendation() {
  const [banners, setBanners] = useState<Array<IBannerItem>>([]);

  useEffect(() => {
    async function getBanner(type: number) {
      try {
        const res = await request({
          url: `/banner?type=${type}`,
          method: 'get'
        });
        setBanners(res.banners);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    getBanner(0);
  }, [])

  return (
    <>
      <SlideCard banners={banners}></SlideCard>
    </>
  )
}