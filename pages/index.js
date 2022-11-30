import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../component/layout/header';
import Category from '../component/layout/category';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('hehe');
  }, []);
  return (
    <div className={styles.wrapp}>
      <Header></Header>
      <br></br>
      <Category></Category>
      <br></br>
      <div className={styles.imagegallery}>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/a5a14ba9535a4e02ae6b08d70f57ced3-09-%E1%84%8D%E1%85%B3%E1%84%8B%E1%85%B103-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034535424.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/77f5a1025d93406ca0512e9883effd39-08-%E1%84%8E%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034534924.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/43cf5262a89c4a2aa9547cc00239a3f7-07-%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034534392.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/1fea6dd34c024265a232f687cb87da33-06-%E1%84%86%E1%85%B5%E1%84%82%E1%85%A1-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034533924.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/422eaf1fc9d14007a367b7336ce947e4-05-%E1%84%8C%E1%85%B5%E1%84%92%E1%85%AD-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034533439.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/41ac77ca998c4553bcf8f8d261a8c6b1-04-%E1%84%89%E1%85%A1%E1%84%82%E1%85%A1-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034532955.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/135a8854590d4929905ed02df6dfbee3-03-%E1%84%86%E1%85%A9%E1%84%86%E1%85%A9-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034532486.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/38d8fbe8527a4e729057e49a30221ee6-02-%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%AB-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034532002.jpg"></img>
        </a>
        <a href="#">
          <img src="https://lv2-cdn.azureedge.net/twice/5434f221849e4e9f9b18ef15f3fffb03-01-%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034531533.jpg"></img>
        </a>
      </div>
    </div>
  );
}
