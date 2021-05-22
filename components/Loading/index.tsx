import { ReactNode } from 'react';
import LoadingAnimation from './LoadingAnimation/index';
import styles from './style.module.css';

export default function Loading({
  children,
  currentState,
}: {
  children: ReactNode;
  currentState: unknown;
}) {
  const Loading = <div className={styles.loading}><LoadingAnimation /></div>
  return (
    <>
      {currentState ? children : Loading}
    </>
  )
}
