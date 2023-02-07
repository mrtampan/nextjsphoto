import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../component/layout/header';
import Category from '../component/layout/category';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { server } from '../config';


export default function Home({ allData }) {


  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  useEffect(()=> {
    const onScroll = () => {
      if((window.pageYOffset <= 0) && (scrollPosition > 0))
      {
        router.reload('/')

      }
      setScrollPosition(window.pageYOffset);
    };

    window.removeEventListener('touchmove', onScroll);
    window.addEventListener('touchmove', onScroll);

    return () => window.removeEventListener('touchmove', onScroll);
    
    
  })
  


  return (
    <div className={styles.wrapp}>
      {/* <Header></Header>
      <br></br> */}
      <Category></Category>
      <div className={styles.imagegallery}>
        {allData.data.map((data) => {
          return (
            <Link key={data.id} href={`/imagedetail/${data.id}`}>
              <img src={data.img}></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(server + '/api/dataku.json');
  const allData = await res.json();
  return {
    props: {
      allData,
    },
  };
}
