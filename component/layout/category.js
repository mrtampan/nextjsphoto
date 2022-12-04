import Link from 'next/link';
import styles from '../../styles/Category.module.css';
export default function Category({ catparam }) {
  console.log(catparam);
  return (
    <div className={styles.kategoriwrap}>
      <div className={styles.kategorinya}>
        <Link href="/" className={!catparam ? styles.selectKategori : ''}>
          Semua
        </Link>
        <Link
          href="/category/twice"
          className={catparam == 'twice' ? styles.selectKategori : ''}
        >
          Twice
        </Link>
        <Link
          href="/category/redvelvet"
          className={catparam == 'redvelvet' ? styles.selectKategori : ''}
        >
          Red Velvet
        </Link>
        <Link
          href="/category/gfriend"
          className={catparam == 'gfriend' ? styles.selectKategori : ''}
        >
          Gfriend
        </Link>
        <Link
          href="/category/viviz"
          className={catparam == 'viviz' ? styles.selectKategori : ''}
        >
          Viviz
        </Link>
      </div>
    </div>
  );
}
