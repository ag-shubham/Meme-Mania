import Link from 'next/link';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <h1>Welcome to Meme Mania</h1>
        <p>Where memes rule the internet!</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} href="/memes">Enter Gallery</Link>
      </div>
    </div>
  );
};

export default Home;