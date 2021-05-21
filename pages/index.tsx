import { useRouter } from 'next/router'
import { Component, useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/divcovery');
  }, [])
}
