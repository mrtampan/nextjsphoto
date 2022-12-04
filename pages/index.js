import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../component/layout/header';
import Category from '../component/layout/category';
import { useEffect } from 'react';
import Link from 'next/link';
import { server } from '../config';

export default function Home({ allData }) {
  return (
    <div className={styles.wrapp}>
      <Header></Header>
      <br></br>
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
