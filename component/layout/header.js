import Link from 'next/link';
import styles from '../../styles/Header.module.css';
export default function Header() {
  return (
    <>
      <div className={styles.judul}>
        <Link href="/">NEXTPHOTO</Link>
      </div>
      <div className={styles.garis}>&nbsp;</div>
    </>
  );
}
