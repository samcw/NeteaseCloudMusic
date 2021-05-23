import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Discovery from './discovery/index';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/discovery');
  }, [])

  return (
    <></>
  )
}
