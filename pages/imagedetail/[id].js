import Header from '../../component/layout/header';
import Category from '../../component/layout/category';
import homestyles from '../../styles/Home.module.css';
import styles from '../../styles/ImageDetail.module.css';
import { server } from '../../config';
export default function ImageDetail({ dataaja }) {
  return (
    <div>
      <div className={homestyles.wrapp}>
        <Header></Header>
        <br></br>
        <Category></Category>
        <div className={styles.gambardiv}>
          <img className={styles.gambar} alt="foto" src={dataaja.img}></img>
        </div>
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
      id: `${data.id}`,
    },
  }));
  return {
    paths: pathData,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(server + '/api/dataku.json');
  const allData = await res.json();

  const oneData = {};

  const loopData = allData.data.map((data) => {
    if (data.id == id) {
      oneData['img'] = data.img;
    }
  });

  return {
    // Passed to the page component as props
    props: { dataaja: oneData },
  };
}
