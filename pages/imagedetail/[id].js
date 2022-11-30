import Header from '../../component/layout/header';
import Category from '../../component/layout/category';
import homestyles from '../../styles/Home.module.css';
import styles from '../../styles/ImageDetail.module.css';
export default function ImageDetail() {
  return (
    <div>
      <div className={homestyles.wrapp}>
        <Header></Header>
        <br></br>
        <Category></Category>
        <br></br>
        <div>
          {' '}
          <img
            className={styles.gambar}
            src="https://lv2-cdn.azureedge.net/twice/5434f221849e4e9f9b18ef15f3fffb03-01-%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB-03-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB20220824034531533.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}
