import styles from '../../styles/Category.module.css';
export default function Category() {
  return (
    <div className={styles.kategoriwrap}>
      <div className={styles.kategorinya}>
        <a href="?cat=twice">Twice</a>
        <a href="?cat=redvelvet">Red Velvet</a>
        <a href="?cat=gfriend">Gfriend</a>
      </div>
    </div>
  );
}
