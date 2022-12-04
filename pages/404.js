import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../component/layout/header';
import styles from '../styles/Home.module.css';

export default function Custom404() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.wrapp}>
        <Header></Header>
        <br></br>
        <h2 className="title-not-found">Oopsss.....</h2>
        <h3 className="title-not-found">Halaman yang anda cari tidak ada</h3>
        <br></br>
        <button onClick={() => kembalikehome(router)}>
          Kembali ke halaman utama
        </button>
      </div>
    </div>
  );
}

export async function kembalikehome(router) {
  router.push('/');
}
