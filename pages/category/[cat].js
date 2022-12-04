import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Header from '../../component/layout/header';
import Category from '../../component/layout/category';
import { useEffect } from 'react';
import Link from 'next/link';
import { server } from '../../config';

export default function CategoryData({ allData, cat }) {
  return (
    <div className={styles.wrapp}>
      <Header></Header>
      <br></br>
      <Category catparam={cat}></Category>
      <br></br>
      <div className={styles.imagegallery}>
        {allData.map((data) => {
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

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const res = await fetch(server + '/api/dataku.json');
  const allData = await res.json();

  const pathData = allData.data.map((data) => ({
    params: {
      cat: `${data.cat}`,
    },
  }));
  return {
    paths: pathData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { cat } = context.params;
  const res = await fetch(server + '/api/dataku.json');
  const resJson = await res.json();

  const saveData = [];

  const loopData = resJson.data.map((data) => {
    if (data.cat == cat) {
      saveData.push(data);
    }
  });

  return {
    // Passed to the page component as props
    props: { allData: saveData, cat: cat },
  };
}
